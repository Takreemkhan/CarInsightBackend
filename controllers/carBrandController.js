// backend/controllers/carBrandController.js
const CarBrand = require('../models/carBrandModel');


// Get all car brands
exports.getAllCarBrands = async (req, res) => {
  try {
    console.log("Fetching all car brands..."); // Debug log to ensure function is called

    const carBrands = await CarBrand.find(); // Fetch all car brands
    console.log("Fetched Car Brands:", carBrands); // Debug log to show fetched data

    res.json(carBrands); // Send response with fetched data
  } catch (error) {
    console.error('Error fetching car brands:', error); // Log error message
    res.status(500).json({ message: 'Error fetching car brands', error });
  }
};


