// imports
require('dotenv').config();
const express = require('express');
const floraRoutes = require('./routes/floraRoutes');

// create express app
const app = express();

// routes
app.use('/api/floras', floraRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('app listening on port', process.env.PORT);
});
