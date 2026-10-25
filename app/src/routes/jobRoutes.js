const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.get('/', jobController.getAllJobs);
router.get('/stats', jobController.getStats);
router.get('/categories', jobController.getCategories);
router.get('/companies', jobController.getCompanies);
router.get('/:id', jobController.getJobById);
router.post('/', jobController.createJob);
router.patch('/:id/status', jobController.updateJobStatus);
router.delete('/:id', jobController.deleteJob);

module.exports = router;
