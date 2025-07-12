const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: { exclude: ['password'] } });
    if (!user) return res.status(404).json("User not found");
    res.json(user);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const paramId = Number(req.params.id);
    console.log('updateUser called with req.user.id:', req.user.id, 'paramId:', paramId, 'body:', req.body);
    if (req.user.id !== paramId) return res.status(403).json("Unauthorized");

    const user = await User.findByPk(paramId);
    if (!user) return res.status(404).json("User not found");

    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key];
    });

    await user.save();
    res.json(user);
  } catch (err) {
    console.error('Error in updateUser:', err);
    res.status(400).json(err.message);
  }
};

exports.searchUsers = async (req, res) => {
  const skill = req.query.skill;
  try {
    const users = await User.findAll({
      where: {
        skillsOffered: {
          [require('sequelize').Op.like]: `%${skill}%`
        },
        isPublic: true
      }
    });
    res.json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
