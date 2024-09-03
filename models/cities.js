// models/City.js
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  city: String,
  state: String
});

module.exports = mongoose.model('cities', citySchema); // Use singular for model name
