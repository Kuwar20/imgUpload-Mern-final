// connect nodejs (server) with mongodb database
// for that we will use mongoose

const mongoose = require("mongoose");

const DB = process.env.DATABASE;  // we have created a .env file and stored the database url there

mongoose.connect(DB,{
    useNewUrlParser:true,     // it is deprecated (no need to write)
   useUnifiedTopology:true   // it is deprecated (no need to write)
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("no connection");
})

// after this we will go to app.js file
// and import this file there