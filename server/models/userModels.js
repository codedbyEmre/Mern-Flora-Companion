// imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// signup user
userSchema.statics.signup = async function (username, email, password) {
  if (!username || !email || !password) {
    throw Error('All required fields must be filled!');
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid!');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password is not strong enough!');
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error('Email already in use!');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });

  return user;
};

// login user
userSchema.statics.login = async function (username, email, password) {
  if (!username || !email || !password) {
    throw Error('All required fields must be filled!');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error('Email is not exist!');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Password is incorrect! Please double-check and re-enter.');
  }

  return user;
};

module.exports = mongoose.model('User', userSchema);
