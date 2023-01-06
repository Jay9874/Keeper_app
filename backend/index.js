// Requiring the packages
require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');
const path = require('path');

// initializing express 
const app = express();
app.use(cors({origin:true, credentials:true}));
// connectDB
connectDB();


app.use(express.static('../frontend/build'));


// routes
const  keep = require('./routes/keep');

// initialize middleware
app.use(express.json({extended:false}))


// home route
app.get("/api/home", (req, res) => {
    res.send("<h1>Common... just keep going. Your server is runnig.</h1>");
})

app.get("/api/about", (req, res) => {
    res.send("<h1>Common... just keep going. Your server is runnig.</h1>");
})

// use routes 
app.use("/api", keep);


app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });


// setting up the port
const port = 8080 || process.env.PORT;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});