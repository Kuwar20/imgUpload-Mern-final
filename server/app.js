require('dotenv').config(); // to use .env file
const express = require('express');  // 1st step,  imports the 'express' module  
const app = express();  // 2nd step , creates an instance of the express application and assigns it to the variable 'app'.

require("./db/conn.js");  // importing the file conn.js from db folder

const router = require("./routes/router");  // importing the file router.js from routes folder
// app.use(router);  this will give cors error,
// define it after cors

const cors = require("cors");  // importing the cors module
// server (FE) and client (BE) are running on different ports, so we need to use cors module to connect them.
app.use(express.json()); 
app.use(cors());
app.use(router);

// to make the uploads folder static, so that we can access the images from the uploads folder here in app.js
app.use("/uploads", express.static("uploads")); 

//This is the server that's set up to respond to incoming requests
const port = 8008;  // 3rd step, sets the port number to 8008


// even after creating the server, and listening on port 8008,
// if we open the browser and type localhost:8008, it will give an error message "Cannot GET /" because we havent told it what to do when it receives a request.
 app.get('/',(req,res)=>{  // 5th step,  tells the server what to do when it receives a request.
    res.send("Server Started");
})    // moved to router.js
// now if you go to localhost:8008, it will show the message "Server Started".
// instead of error we were getting earlier.

/*This server is running locally on your machine.
 When you start this server, it listens for requests on port 8008 of your computer. */
app.listen(port, () => {   // 4th step , starts the server and makes it listen on the specified port (8008)
    console.log(`Server is running on port ${port}`);  //When the server starts listening, it logs a message to the console indicating that the server is running on the specified port.
})

/* You can access it using your web browser by typing http://localhost:8008 into the address bar. 
if it connects that means the server is running and listening on port 8008., try ;
localhost:8007 and localhost:8009, you will get an error message because the server is not listening on those ports.
the page wont even open and give error message.
*/



//these 5 steps are the basic steps to create a server and make it listen on a port.