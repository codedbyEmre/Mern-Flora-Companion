// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const floraRoutes = require('./routes/floraRoutes');

// create express app
const app = express();

// routes
app.use('/api/floras', floraRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('app listening on port', process.env.PORT);
    });
  })
  .catch(error => {
    console.log('error :>> ', error);
  });
