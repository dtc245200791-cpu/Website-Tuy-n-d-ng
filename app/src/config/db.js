const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
const logger = require('../middleware/logger');

const dbConfig = {
  host: process.env.DB_HOST || 'mysql',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'jobboard_user',
  password: process.env.DB_PASSWORD || 'JobBoardSecure_2026!@#',
  database: process.env.DB_NAME || 'jobboard_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true
};

let pool = null;

async function initDatabase(maxRetries = 20, delayMs = 3000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      logger.info(`Dang ket noi CSDL MySQL (Lan ${attempt}/${maxRetries})...`, { host: dbConfig.host, port: dbConfig.port });
      pool = mysql.createPool(dbConfig);
      
      const [rows] = await pool.query('SELECT 1 + 1 AS solution');
      logger.info('Ket noi MySQL thanh cong!', { solution: rows[0].solution });

      // Run schema initialization
      const schemaPath = path.join(__dirname, '../models/schema.sql');
      if (fs.existsSync(schemaPath)) {
        const schemaSql = fs.readFileSync(schemaPath, 'utf8');
        await pool.query(schemaSql);
        logger.info('Khoi tao schema va seed data MySQL thanh cong!');
      }

      return pool;
    } catch (err) {
      logger.warn(`Chua the ket noi MySQL (Lan ${attempt}/${maxRetries}): ${err.message}. Thu lai sau ${delayMs / 1000}s...`);
      if (attempt === maxRetries) {
        logger.error('Khong the ket noi den CSDL MySQL sau nhieu lan thu.', { error: err.stack });
        throw err;
      }
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }
}

function getPool() {
  if (!pool) {
    throw new Error('Database pool chua duoc khoi tao. Hay goi initDatabase() truoc.');
  }
  return pool;
}

module.exports = {
  initDatabase,
  getPool
};
