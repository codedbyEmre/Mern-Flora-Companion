// imports
require('dotenv').config();
const express = require('express');

// create express app
const app = express();

// routes
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to the app!' });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('app listening on port', process.env.PORT);
});
