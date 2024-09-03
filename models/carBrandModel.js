// backend/models/carBrandModel.js
const mongoose = require('mongoose');

// Define CarBrand Schema
const carBrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo_link: { type: String, required: true },
}, {
  collection: 'CarBrand' // Explicitly specify the collection name
});

// Create Model from Schema
const CarBrand = mongoose.model('CarBrand', carBrandSchema);

module.exports = CarBrand;
