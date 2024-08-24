const express = require('express');
const mongoose = require('mongoose');
const { HB_DB } = require('./utils/config');
const roomRoutes = require('./routes/roomRoutes');

const app = express();

app.use(express.json()); 

mongoose.connect(HB_DB)
    .then(() => {
        console.log('Connected to MongoDB');
        
        app.listen(3001, () => {
            console.log('Server is running on port 3001 : http://localhost:3001');
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use('/rooms', roomRoutes); 