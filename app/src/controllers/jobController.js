const { getPool } = require('../config/db');
const logger = require('../middleware/logger');
const { activeJobsGauge } = require('../middleware/metrics');

async function getAllJobs(req, res) {
  try {
    const pool = getPool();
    const { search, category, job_type, location } = req.query;

    let query = `
      SELECT j.*, 
             c.name AS company_name, c.logo_url, c.website AS company_website,
             cat.name AS category_name
      FROM jobs j
      JOIN companies c ON j.company_id = c.id
      JOIN categories cat ON j.category_id = cat.id
      WHERE 1=1
    `;
    const params = [];

    if (search) {
      query += ` AND (j.title LIKE ? OR c.name LIKE ? OR j.description LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }
    if (category) {
      query += ` AND (cat.slug = ? OR cat.id = ?)`;
      params.push(category, category);
    }
    if (job_type) {
      query += ` AND j.job_type = ?`;
      params.push(job_type);
    }
    if (location) {
      query += ` AND j.location LIKE ?`;
      params.push(`%${location}%`);
    }

    query += ` ORDER BY j.created_at DESC`;

    const [rows] = await pool.query(query, params);
    
    // Update metric
    const activeCount = rows.filter(j => j.status === 'active').length;
    activeJobsGauge.set(activeCount);

    res.json({
      success: true,
      count: rows.length,
      data: rows
    });
  } catch (error) {
    logger.error('Loi khi lay danh sach tin tuyen dung:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong khi truy van CSDL' });
  }
}

async function getJobById(req, res) {
  try {
    const pool = getPool();
    const { id } = req.params;

    const query = `
      SELECT j.*, 
             c.name AS company_name, c.logo_url, c.website AS company_website, c.description AS company_desc,
             cat.name AS category_name
      FROM jobs j
      JOIN companies c ON j.company_id = c.id
      JOIN categories cat ON j.category_id = cat.id
      WHERE j.id = ?
    `;

    const [rows] = await pool.query(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Khong tim thay tin tuyen dung' });
    }

    res.json({ success: true, data: rows[0] });
  } catch (error) {
    logger.error(`Loi khi lay chi tiet tin tuyen dung id=${req.params.id}:`, { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong' });
  }
}

async function getCategories(req, res) {
  try {
    const pool = getPool();
    const query = `
      SELECT cat.*, COUNT(j.id) AS job_count
      FROM categories cat
      LEFT JOIN jobs j ON cat.id = j.category_id AND j.status = 'active'
      GROUP BY cat.id
      ORDER BY cat.id ASC
    `;
    const [rows] = await pool.query(query);
    res.json({ success: true, data: rows });
  } catch (error) {
    logger.error('Loi khi lay danh muc nghe nghiep:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong' });
  }
}

async function getCompanies(req, res) {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT * FROM companies ORDER BY name ASC');
    res.json({ success: true, data: rows });
  } catch (error) {
    logger.error('Loi khi lay danh sach cong ty:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong' });
  }
}

async function createJob(req, res) {
  try {
    const pool = getPool();
    const {
      title,
      company_id,
      category_id,
      location,
      job_type,
      salary_range,
      experience_level,
      description,
      requirements,
      benefits,
      deadline
    } = req.body;

    if (!title || !company_id || !category_id || !location || !description || !requirements) {
      return res.status(400).json({ success: false, message: 'Vui long dien day du cac truong bat buoc' });
    }

    const query = `
      INSERT INTO jobs 
      (title, company_id, category_id, location, job_type, salary_range, experience_level, description, requirements, benefits, deadline, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
    `;

    const [result] = await pool.query(query, [
      title,
      company_id,
      category_id,
      location,
      job_type || 'Full-time',
      salary_range || 'Thỏa thuận',
      experience_level || '1-3 nam',
      description,
      requirements,
      benefits || '',
      deadline || null
    ]);

    logger.info('Tao tin tuyen dung moi thanh cong', { jobId: result.insertId, title });

    res.status(201).json({
      success: true,
      message: 'Dang tin tuyen dung thanh cong!',
      data: { id: result.insertId }
    });
  } catch (error) {
    logger.error('Loi khi tao tin tuyen dung moi:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong khi them du lieu' });
  }
}

async function updateJobStatus(req, res) {
  try {
    const pool = getPool();
    const { id } = req.params;
    const { status } = req.body;

    if (!['active', 'closed'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Trang thai khong hop le' });
    }

    await pool.query('UPDATE jobs SET status = ? WHERE id = ?', [status, id]);
    logger.info(`Cap nhat trang thai tin tuyen dung id=${id} sang ${status}`);

    res.json({ success: true, message: 'Cap nhat trang thai thanh cong' });
  } catch (error) {
    logger.error('Loi khi cap nhat trang thai tin:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong' });
  }
}

async function deleteJob(req, res) {
  try {
    const pool = getPool();
    const { id } = req.params;
    await pool.query('DELETE FROM jobs WHERE id = ?', [id]);
    logger.info(`Xoa tin tuyen dung id=${id}`);
    res.json({ success: true, message: 'Xoa tin tuyen dung thanh cong' });
  } catch (error) {
    logger.error('Loi khi xoa tin tuyen dung:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong' });
  }
}

async function getStats(req, res) {
  try {
    const pool = getPool();
    const [jobs] = await pool.query('SELECT COUNT(*) AS total, SUM(CASE WHEN status="active" THEN 1 ELSE 0 END) AS active FROM jobs');
    const [apps] = await pool.query('SELECT COUNT(*) AS total FROM applications');
    const [companies] = await pool.query('SELECT COUNT(*) AS total FROM companies');

    res.json({
      success: true,
      data: {
        total_jobs: jobs[0].total,
        active_jobs: jobs[0].active || 0,
        total_applications: apps[0].total,
        total_companies: companies[0].total
      }
    });
  } catch (error) {
    logger.error('Loi khi lay thong ke he thong:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong' });
  }
}

module.exports = {
  getAllJobs,
  getJobById,
  getCategories,
  getCompanies,
  createJob,
  updateJobStatus,
  deleteJob,
  getStats
};
