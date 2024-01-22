const express = require('express');
const dbConfig = require('./config/dbConfig');
require('dotenv').config()
const app = express();
app.use(express.json());
const port = process.env.PORT 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});