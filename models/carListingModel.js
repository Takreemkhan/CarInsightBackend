// src/models/carListingModel.js
const mongoose = require('mongoose');

const carListingSchema = new mongoose.Schema({
  phoneNumber: String,
  carNumber: String,
  brandName: String,
  year: Number,
  model: String,
  ownership: String,
  km: Number,
  city: String,
  price: Number,
  photo: [String]  // Array of URLs for uploaded photos
});

const CarListing = mongoose.model('CarListing', carListingSchema);

module.exports = CarListing;
