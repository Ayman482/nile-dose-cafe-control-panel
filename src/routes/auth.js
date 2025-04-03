const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { 
  register, 
  login, 
  getMe 
} = require('../controllers/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);

module.exports = router;
