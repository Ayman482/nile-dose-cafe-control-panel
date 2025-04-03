const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { uploadFile } = require('../controllers/uploads');

// Protected routes
router.post('/', protect, uploadFile);

module.exports = router;
