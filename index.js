const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose")
const cors = require("cors");
require("dotenv").config();

app.use(express.json());  
app.use(cors({
  credentials:true,
  AccessControlAllowOrigin: '*',
  origin : "*"
}));

const bodyParser = require('body-parser');

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


// MongoDb Connection 
mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Database is connected");
})
.catch(()=>{
    console.log("Database is Not connected");
})


//Razorpay Route
const phonepeRoute = require('./routes/phonepe/phonepeRoute')
app.use("/api", phonepeRoute);

// Starting Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
