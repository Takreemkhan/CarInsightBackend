// src/routes/uploadPhotosRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Change this path as needed

// Define the route to handle photo uploads
router.post('/api/uploadPhotos', upload.array('photos'), (req, res) => {
  const files = req.files;
  console.log('Received brandName:', brandName);
  const fileUrls = files.map(file => {
    // Generate file URL or path (adjust as needed)
    return `http://localhost:3001/uploads/${file.filename}`;
  });
  res.json({ urls: fileUrls });
});

module.exports = router;
