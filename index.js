let express = require("express");
let mongoose = require ("mongoose");
require('dotenv').config();
 
//connect to mongoose

let app = express();
app.use(express.json());

app.post('api/enquiry-insert',(req,res)=>{
    console.log("working")
})

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log("Working");
      });
});







