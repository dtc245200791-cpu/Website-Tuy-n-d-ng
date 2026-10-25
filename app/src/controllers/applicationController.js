const path = require('path');
const fs = require('fs');
const { getPool } = require('../config/db');
const logger = require('../middleware/logger');
const { applicationCounter } = require('../middleware/metrics');

async function submitApplication(req, res) {
  try {
    const pool = getPool();
    const { job_id, full_name, email, phone, cover_letter } = req.body;

    if (!job_id || !full_name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Vui long dien day du thong tin bat buoc' });
    }

    let cvFilename = 'Sample_CV.pdf';
    let cvFilepath = '/uploads/sample_cv_1.pdf';

    if (req.file) {
      cvFilename = req.file.originalname;
      cvFilepath = `/uploads/${req.file.filename}`;
    }

    const query = `
      INSERT INTO applications (job_id, full_name, email, phone, cover_letter, cv_filename, cv_filepath, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')
    `;

    const [result] = await pool.query(query, [
      job_id,
      full_name,
      email,
      phone,
      cover_letter || '',
      cvFilename,
      cvFilepath
    ]);

    // Prometheus metric inc
    applicationCounter.inc({ status: 'pending' });

    logger.info('Ung vien nop CV thanh cong!', {
      applicationId: result.insertId,
      jobId: job_id,
      candidate: full_name,
      email
    });

    res.status(201).json({
      success: true,
      message: 'Nop ho so ung tuyen thanh cong! Nha tuyen dung se som lien he.',
      data: { id: result.insertId }
    });
  } catch (error) {
    logger.error('Loi khi nop don ung tuyen:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong khi luu ho so' });
  }
}

async function getAllApplications(req, res) {
  try {
    const pool = getPool();
    const { job_id, status } = req.query;

    let query = `
      SELECT a.*, j.title AS job_title, c.name AS company_name
      FROM applications a
      JOIN jobs j ON a.job_id = j.id
      JOIN companies c ON j.company_id = c.id
      WHERE 1=1
    `;
    const params = [];

    if (job_id) {
      query += ` AND a.job_id = ?`;
      params.push(job_id);
    }
    if (status) {
      query += ` AND a.status = ?`;
      params.push(status);
    }

    query += ` ORDER BY a.created_at DESC`;

    const [rows] = await pool.query(query, params);
    res.json({ success: true, count: rows.length, data: rows });
  } catch (error) {
    logger.error('Loi khi lay danh sach ung vien:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong' });
  }
}

async function updateApplicationStatus(req, res) {
  try {
    const pool = getPool();
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'reviewing', 'interviewed', 'accepted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ success: false, message: 'Trang thai ung vien khong hop le' });
    }

    await pool.query('UPDATE applications SET status = ? WHERE id = ?', [status, id]);
    logger.info(`Cap nhat trang thai ho so ung vien id=${id} sang: ${status}`);

    res.json({ success: true, message: 'Cap nhat trang thai ho so thanh cong' });
  } catch (error) {
    logger.error('Loi khi cap nhat trang thai ung vien:', { error: error.message });
    res.status(500).json({ success: false, message: 'Loi he thong' });
  }
}

module.exports = {
  submitApplication,
  getAllApplications,
  updateApplicationStatus
};
