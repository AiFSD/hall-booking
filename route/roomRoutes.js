const express = require('express');
const Room = require('../models/room');

const router = express.Router();

// GET all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET a single room by ID
router.get('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return res.status(404).send('Room not found');
        res.json(room);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST a new room
router.post('/', async (req, res) => {
    const { name, seats, amenities, price } = req.body;

    // Validate required fields
    if (!name || !seats || !price) {
        return res.status(400).send('Missing required fields');
    }

    try {
        const newRoom = new Room({ name, seats, amenities, price });
        const createdRoom = await newRoom.save();
        res.status(201).json(createdRoom);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;