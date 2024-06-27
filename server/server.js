const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const contentRoutes = require('./routes/contentRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/content', contentRoutes);
app.use('/api/users', userRoutes);

// console.log(typeof contentRoutes);
// console.log(contentRoutes);
// console.log(typeof userRoutes);
// console.log(userRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

  // mongoose.set('debug', true); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
