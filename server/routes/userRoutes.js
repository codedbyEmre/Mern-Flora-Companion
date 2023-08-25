// imports
const express = require('express');

const router = express.Router();

// signup user
router.post('/signup', (req, res) => {
  res.json({ mssg: 'Sign up user!' });
});

// login user
router.post('/login', (req, res) => {
  res.json({ mssg: 'Login user!' });
});

module.exports = router;
