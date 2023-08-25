// imports
const User = require('../models/userModels');
const jwt = require('jsonwebtoken');

const createToken = id => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: '3d' });
};

// signup user
const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);

    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// login user
const login = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.login(username, email, password);

    const token = createToken(user._id);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signup, login };
