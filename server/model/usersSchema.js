// after we made connection to the database, 
// by creating conn.js and importing it in app.js
//we need to create a schema for the user

/* A schema is a blueprint or structure that defines the organization and properties of data stored in a database */


// defined/create schema 
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date,
       
    }
});

// define/create model
const users = new mongoose.model("users",userSchema);

// export model
module.exports = users;