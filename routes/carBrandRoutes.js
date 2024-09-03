// backend/routes/carBrandRoutes.js
const express = require('express');
const router = express.Router();
const carBrandController = require('../controllers/carBrandController');

//console.log(carBrandController); // Add this line to debug

// Route to get all car brands
router.get('/car-brands', carBrandController.getAllCarBrands);

module.exports = router;
