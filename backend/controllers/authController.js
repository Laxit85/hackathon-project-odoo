const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash });
    res.status(201).json("User registered");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(404).json("User not found");

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) return res.status(401).json("Wrong password");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token, user });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
