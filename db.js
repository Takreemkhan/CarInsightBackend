// backend/config/db.js
const mongoose = require('mongoose');

// MongoDB Connection URI
//const mongoURI = 'mongodb://127.0.0.1:27017/CarInsights'; // Replace 'CarInsights' with your actual database name
const mongoURI = "mongodb+srv://7takreemkhan7:takreem1234@carinsightdb.hxldn.mongodb.net/CarInsight?retryWrites=true&w=majority&appName=CarInsightDb"; 
                  
// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connectDB function
module.exports = connectDB;
