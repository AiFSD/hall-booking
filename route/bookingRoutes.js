const express = require('express');
const Booking = require('../models/booking');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        const createdBooking = await booking.save();
        res.status(201).json(createdBooking);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/', async (req, res) => {
    try {
        // Find all rooms
        const rooms = await Room.find();

        // Find booking details for each room
        const roomsWithBookings = await Promise.all(rooms.map(async room => {
            const bookings = await Booking.find({ room: room._id });
            return {
                room,
                bookings
            };
        }));

        res.json(roomsWithBookings);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/customers', async (req, res) => {
    try {
        // Find all unique customers
        const customers = await Booking.distinct('customer');

        // Get booking details for each customer
        const customersWithBookings = await Promise.all(customers.map(async customer => {
            const bookings = await Booking.find({ customer }).populate('room');
            return {
                customer,
                bookings
            };
        }));

        res.json(customersWithBookings);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/booking-count', async (req, res) => {
    try {
        
        const customerBookingCounts = await Booking.aggregate([
            {
                $group: {
                    _id: "$customer",
                    count: { $sum: 1 },
                    bookings: { $push: {
                        room: "$room",
                        date: "$date",
                        start_time: "$start_time",
                        end_time: "$end_time",
                        booking_id: "$_id",
                        booking_date: "$createdAt",
                        status: "$status"
                    }}
                }
            }
        ]);

        res.json(customerBookingCounts);
    } catch (err) {
        res.status(500).send(err.message);
    }
});




router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id).populate('room');
        if (!booking) return res.status(404).send('Booking not found');
        res.json(booking);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
