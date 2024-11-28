const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Route to register a new user
router.post('/register', registerUser);

// Route to log in an existing user
router.post('/login', loginUser);

// Route to get the profile of the logged-in user
router.get('/profile', protect, getUserProfile);

// Route to update the profile of the logged-in user
router.put('/profile', protect, updateUserProfile);

module.exports = router;
