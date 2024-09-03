const express = require('express');
const router = express.Router();
const twilio = require('twilio');
require('dotenv').config(); // Load environment variables from .env file


// Fetch environment variables for Twilio configuration
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

// Ensure Twilio credentials are provided
if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER) {
  throw new Error("Twilio credentials are not set in the environment variables. Please set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER in your .env file.");
}

// Initialize Twilio client
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// In-memory store for OTPs, replace with a database in production
let otpStore = {};

// Route to request an OTP
router.post('/request-otp', (req, res) => {
  const { phoneNumber } = req.body;
  
  if (!phoneNumber) {
    return res.status(400).json({ message: 'Phone number is required' });
  }

  // Generate a random OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[phoneNumber] = otp;

  // Send OTP via Twilio
  client.messages.create({
    body: `Your OTP is for carInsight Login ${otp}`,
    from: TWILIO_PHONE_NUMBER,
    to: phoneNumber
  })
  .then(() => {
    console.log(`OTP sent to ${phoneNumber}: ${otp}`);
    res.json({ message: 'OTP sent successfully !' });
  })
  .catch(err => {
    console.error('Error sending OTP:', err);
    res.status(500).json({ message: 'Failed to send OTP !', error: err.message });
  });
});

// Route to verify the OTP
router.post('/verify-otp', (req, res) => {
  const { phoneNumber, otp } = req.body;

  if (!phoneNumber || !otp) {
    return res.status(400).json({ message: 'Phone number and OTP are required !' });
  }

  // Verify the OTP
  if (otpStore[phoneNumber] === otp) {
    delete otpStore[phoneNumber]; // Remove OTP after verification
    res.json({ message: 'OTP verified successfully !' });
  } else {
    res.status(400).json({ message: 'Invalid OTP !' });
  }
});

module.exports = router;
