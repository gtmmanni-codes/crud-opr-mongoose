// Import the Express framework
let express = require("express");
let mongoose = require ("mongoose");
// Load environment variables from .env file
require('dotenv').config();
 
//connect to mongoose

let app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

//creating API route
app.post('api/enquiry-insert',(req,res)=>{
    console.log("working")
})

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log("Working");
      });
});


app.listen("8000",()=>{
    console.log("port working");
});






