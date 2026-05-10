let express = require("express");
let mongoose = require ("mongoose");
require('dotenv').config();
 
//connect to mongoose

let app = express();

mongoose.connect(process.env.DBURL);


app.use(express.json());




app.listen("8000",()=>{
    console.log("Working");

});
