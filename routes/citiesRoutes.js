const express = require('express');
const router = express.Router();
const citiesController = require('../controllers/citiesController');

// Rename endpoint if you want to fetch only cities
router.get('/cities', citiesController.getCities);

module.exports = router;