const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    data: {
        type: [[String]],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Table', TableSchema); 