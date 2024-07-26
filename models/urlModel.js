const mongoose = require('mongoose');

const usrlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    redirectUrl:{
        type: String,
        required: true
    },
    visitHistory: [{ timestamp: Date, ip: String }]
}, { timestamps: true });


module.exports = mongoose.model('Url', usrlSchema);