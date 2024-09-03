// controllers/carController.js

const modelname = require('../models/ModelName');

exports.getModelsByBrand = async (req, res) => {
  try {
    const { brand } = req.params;
    console.log('Received brand:', brand); 
    const carData = await modelname.findOne({ brand });
    if (!carData) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.json(carData.models);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
