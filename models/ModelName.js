// models/CarModel.js

const mongoose = require('mongoose');

const carModelSchema = new mongoose.Schema({
  brand: String,
  models: [String]
},
{
  collection: 'modelname'  // Explicitly set the collection name
}
);

module.exports = mongoose.model('modelname', carModelSchema);
