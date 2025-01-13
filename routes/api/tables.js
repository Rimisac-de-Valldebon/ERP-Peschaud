const express = require('express');
const router = express.Router();
const Table = require('../../models/Table');

// Get all tables
router.get('/', async (req, res) => {
    try {
        const tables = await Table.find();
        res.json(tables);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Add a new table
router.post('/', async (req, res) => {
    try {
        const newTable = new Table({
            title: req.body.title,
            data: req.body.data
        });

        const table = await newTable.save();
        res.json(table);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Update a table
router.put('/:id', async (req, res) => {
    try {
        const table = await Table.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.json(table);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Delete a table
router.delete('/:id', async (req, res) => {
    try {
        await Table.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Table deleted' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router; 