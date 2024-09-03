// routes/carRoutes.js

const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.get('/models/:brand', carController.getModelsByBrand);

module.exports = router;
