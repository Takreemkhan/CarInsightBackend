// src/routes/carListingRoutes.js
const express = require('express');
const router = express.Router();
const CarListing = require('../models/carListingModel');

router.post('/api/saveCarListing', async (req, res) => {
  try {
    const data = req.body;
    console.log("data",data);
    const carListing = new CarListing(data);
    await carListing.save();
    res.status(200).json({ message: 'Car listing saved successfully!' });
  } catch (error) {
    console.error('Error saving car listing:', error);
    res.status(500).json({ message: 'Error saving car listing' });
  }
});

module.exports = router;
