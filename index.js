let express = require("express");

let app = express();

app.use(express.json());




app.listen("8000",()=>{
    console.log("Working");

});
