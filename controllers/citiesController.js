
// controllers/citiesController.js
const cities = require('../models/cities');

exports.getCities = async (req, res) => {
  try {
    const city = await cities.find({}, { _id: 0, city: 1 }); // Fetch only the city field
    res.json(city);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
};

