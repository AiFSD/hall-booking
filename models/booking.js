const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId, ref: "Room"
    },
    customer: String,
    date: Date,
    start_time: Number,
    end_time: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: "confirmed"
    }
});


module.exports = mongoose.model("Booking", bookingSchema);
