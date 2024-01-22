const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.mongo_url);
const db = mongoose.connection;

const connection = mongoose.connection;

connection.on('error', () => {
    console.log(`Connection error`);
});

connection.on('connected', () => {
    console.log("MongoDB database connected!")
});



module.exports = connection;


