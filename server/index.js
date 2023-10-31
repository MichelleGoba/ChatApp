// to bring in express
const express = require("express")
const cors = require("cors") // allow front end communication
const mongoose = require("mongoose");
const { CONNREFUSED } = require("dns");

// object which will have various methods that will be used to create the chat app
const app = express();

// configure env package
require("dotenv").config()


// modular functions that add extra capability to the app
app.use(express.json()) // this will allow to use json data - send and receive
app.use(cors())


// CRUD operation - Create read update delete
// post data - get data from the front end and receive it using app.post
// route creating
app.get("/", (req, res) => {
    res.send("Welcome to our chat app APIs...");
});

// req when receiving data and res to send data to fron end

// set an automatic port from the environment variable, if it is not available use 5000
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log(`Server running on port: ${port}`);
});


// use mongoose to connect to the mongooseDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connection established")).catch((error) => console.log("MogoDB connection failed: ", error.message));