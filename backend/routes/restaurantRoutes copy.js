const express = require('express');
const router = express.Router();
const { getRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurantController');
const { protect, admin } = require('../middleware/authMiddleware');

// Route to get all restaurants
router.get('/', getRestaurants);

// Route to get a single restaurant by ID
router.get('/:id', getRestaurantById);

// Route to create a new restaurant (admin only)
router.post('/', protect, admin, createRestaurant);

// Route to update an existing restaurant (admin only)
router.put('/:id', protect, admin, updateRestaurant);

// Route to delete a restaurant (admin only)
router.delete('/:id', protect, admin, deleteRestaurant);

module.exports = router;
