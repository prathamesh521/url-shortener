const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB connected at: ${connect.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

connectDB();

app.use('/api/url', require('./routes/urlRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})