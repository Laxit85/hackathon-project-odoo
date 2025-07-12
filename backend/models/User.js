const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  profilePhoto: {
    type: DataTypes.STRING,
  },
  skillsOffered: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  skillsWanted: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  availability: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  isPublic: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  }
}, {
  timestamps: true,
  tableName: 'users',
});

module.exports = User;
