const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Swap = sequelize.define('Swap', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  requesterId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  receiverId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  skillRequested: {
    type: DataTypes.STRING,
  },
  skillOffered: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'rejected', 'deleted'),
    defaultValue: 'pending',
  },
  feedback: {
    type: DataTypes.JSON,
    allowNull: true,
  }
}, {
  timestamps: true,
  tableName: 'swaps',
});

module.exports = Swap;
