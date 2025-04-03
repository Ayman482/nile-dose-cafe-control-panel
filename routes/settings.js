const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { 
  getSettings, 
  updateSettings 
} = require('../controllers/settings');

// Public routes
router.get('/', getSettings);

// Protected routes
router.put('/', protect, updateSettings);

module.exports = router;
