const mongoose = require('mongoose');
const express = require('express');
const { HB_DB } = require('./utils/config');
const roomRoutes = require('./route/roomRoutes');
const bookingRoutes = require('./route/bookingRoutes');

const app = express();

app.use(express.json());

// Use routes
app.use('/rooms', roomRoutes);
app.use('/bookings', bookingRoutes);

mongoose.connect(HB_DB)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3001, () => {
            console.log('Server is running on port 3001 : http://localhost:3001');
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));
