let express = require("express");
let mongoose = require ("mongoose");
require('dotenv').config();
 
//connect to mongoose

let app = express();

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log("Working");
      });
});


app.use(express.json());





