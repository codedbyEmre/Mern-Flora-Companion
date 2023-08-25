// imports
const express = require('express');
const { signup, login } = require('../controllers/userControllers');

const router = express.Router();

// signup user
router.post('/signup', signup);

// login user
router.post('/login', login);

module.exports = router;
