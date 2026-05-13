// Import the Express framework
let express = require("express");

// Import Mongoose for MongoDB connection
let mongoose = require ("mongoose");
const enquiryModel = require("./models/enquiry.model");


// Load environment variables from .env file
require('dotenv').config();
 
//connect to mongoose

let app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

//creating API route
app.post('/api/enquiry-insert',(req,res)=>{
    
    //let data =req.body;
    let {sName,sEmail,sPhone,sMessage}=req.body;

    let enquiry = new enquiryModel(
        {
            name:sName,
            email:sEmail,
            phone:sPhone,
            message:sMessage
        }
    );
    enquiry.save();
    
    res.send({status:1,msg:"Data saved",data});

    
})


//mongoose connect
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log("Working");
      });
});


app.listen("8000",()=>{
    console.log("port working");
});






