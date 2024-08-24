const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: String,
    seats: Number,
    amenities: [String],
    price: Number
});

module.exports = mongoose.model("Room", roomSchema);
