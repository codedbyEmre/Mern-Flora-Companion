// signup user
const signup = async (req, res) => {
  res.json({ mssg: 'Sign up user!' });
};

// login user
const login = async (req, res) => {
  res.json({ mssg: 'Login user!' });
};

module.exports = { signup, login };
