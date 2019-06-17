const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    copies: {
        type: Number,
        default: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Movie", MovieSchema);