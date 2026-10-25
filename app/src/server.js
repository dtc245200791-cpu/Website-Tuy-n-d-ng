const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { initDatabase } = require('./config/db');
const logger = require('./middleware/logger');
const { client, metricsMiddleware } = require('./middleware/metrics');

const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Metrics collection middleware for Prometheus
app.use(metricsMiddleware);

// Morgan HTTP request logging (piped to Winston)
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms', {
    stream: {
      write: (message) => logger.info(message.trim(), { type: 'http_request' })
    }
  })
);

// Serve static frontend assets
app.use(express.static(path.join(__dirname, '../public')));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Prometheus Metrics Endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } catch (err) {
    logger.error('Loi khi sinh Prometheus metrics:', { error: err.message });
    res.status(500).end(err);
  }
});

// Container Healthcheck Endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'job-board-web-app',
    version: '1.0.0'
  });
});

// API Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled Server Error:', { error: err.message, stack: err.stack });
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Loi may chu noi bo'
  });
});

// Fallback for HTML5 SPA navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Bootstrap Server & DB
async function startServer() {
  try {
    await initDatabase();
    app.listen(PORT, '0.0.0.0', () => {
      logger.info(`Job Board Web App dang chay tai http://0.0.0.0:${PORT}`);
      logger.info(`Prometheus Metrics san sang tai http://0.0.0.0:${PORT}/metrics`);
    });
  } catch (err) {
    logger.error('Khoi dong server that bai:', { error: err.message });
    process.exit(1);
  }
}

startServer();
