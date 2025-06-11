require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

// Basic homepage
app.get('/', (req, res) => {
  res.send('Yanis Games Dinosaur Bot OAuth2 Server');
});

// Handle all routes starting with /authorize
app.get('/authorize*', (req, res) => {
  res.send('Received an authorize request: ' + req.originalUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
