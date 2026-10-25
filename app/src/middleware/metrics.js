const client = require('prom-client');

// Initialize default system metrics (cpu, memory, event loop, gc)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ prefix: 'jobboard_' });

// HTTP Request Counter
const httpRequestCounter = new client.Counter({
  name: 'jobboard_http_requests_total',
  help: 'Tong so luot HTTP request den he thong',
  labelNames: ['method', 'route', 'status']
});

// HTTP Request Duration Histogram
const httpRequestDuration = new client.Histogram({
  name: 'jobboard_http_request_duration_seconds',
  help: 'Thoi gian xu ly request HTTP theo giay',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.01, 0.05, 0.1, 0.3, 0.5, 1, 2, 5]
});

// Applications Counter
const applicationCounter = new client.Counter({
  name: 'jobboard_applications_total',
  help: 'Tong so ho so ung tuyen da nop',
  labelNames: ['status']
});

// Active Jobs Gauge
const activeJobsGauge = new client.Gauge({
  name: 'jobboard_active_jobs_current',
  help: 'So luong tin tuyen dung dang hoat dong'
});

// Middleware to track requests
function metricsMiddleware(req, res, next) {
  // Ignore /metrics and static files from latency histogram to avoid noise
  if (req.path === '/metrics' || req.path.startsWith('/css') || req.path.startsWith('/js') || req.path.startsWith('/uploads')) {
    return next();
  }

  const endTimer = httpRequestDuration.startTimer();

  res.on('finish', () => {
    const route = req.route ? req.route.path : req.path;
    const labels = {
      method: req.method,
      route: route,
      status: res.statusCode
    };
    httpRequestCounter.inc(labels);
    endTimer(labels);
  });

  next();
}

module.exports = {
  client,
  metricsMiddleware,
  applicationCounter,
  activeJobsGauge
};
