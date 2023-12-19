const express = require("express");
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
const Port = process.env.PORT


app.use(express.json());

app.use('/', routes);

app.listen(Port, (req, res) => {
    console.log("THe port is running");
})

mongoose.connect(process.env.MONGODB_U).then(() => {
    console.log("mongoose connected successfully");
}).catch(err => console.log(err));