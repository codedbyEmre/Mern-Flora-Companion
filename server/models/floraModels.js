// imports
const mongoose = require('mongoose');

const floraSchema = new mongoose.Schema({
  commonName: {
    type: String,
    required: true
  },
  botanicalName: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  plantType: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  soilType: {
    type: String,
    required: true
  },
  soilPh: {
    type: Number,
    required: true
  },
  bloomTime: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Flora', floraSchema);
