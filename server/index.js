// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const floraRoutes = require('./routes/floraRoutes');

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/floras', floraRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & app listening on port', process.env.PORT);
    });
  })
  .catch(error => {
    console.log('error :>> ', error);
  });
