const express = require('express');
const app = express();
require('dotenv').config();
const dbConfig = require('./config/dbConfig');


const portfolioroute = require('./routes/portfolioRoute')
app.use(express.json());
app.use("/api/portfolio", portfolioroute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
