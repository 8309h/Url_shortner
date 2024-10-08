const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { connection } = require('./config/db');
const urlRouter = require('./routes/urlRoutes')
require('dotenv').config();
 
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=> {
    res.send("Welcome to URL-Shortner")
})

app.use('/url',urlRouter);

const Port = process.env.PORT || 8000; 

app.listen(Port, async () => {
    try {
        await connection;
        console.log("Connected to the DB");
    } catch (error) {
        console.log("Error connecting to DB:", error);
    }
    console.log(`Server running on port ${Port}`);
});