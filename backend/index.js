// Requiring the packages
require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors');

// initializing express 
const app = express();

app.use(express.static('../frontend/build'));


// routes
const  keep = require('./routes/keep');

// connectDB
connectDB();

app.use(cors({origin:true, credentials:true}));

// initialize middleware
app.use(express.json({extended:false}))


// home route
app.get("/api/home", (req, res) => {
    res.send("<h1>Common... just keep going. Your server is runnig.</h1>");
})

// use routes 
app.use("/api", keep);





// setting up the port
const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});