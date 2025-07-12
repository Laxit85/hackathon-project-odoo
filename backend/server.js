const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const swapRoutes = require('./routes/swaps');

const app = express();
app.use(cors());
app.use(express.json());

// Test DB connection and sync models
sequelize.authenticate()
  .then(() => {
    console.log('MySQL connected');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Make sequelize instance available to routes/controllers
app.set('sequelize', sequelize);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/swaps', swapRoutes);
