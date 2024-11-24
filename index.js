// Import the Express module
const express = require('express');

//import mongoose
const mongoose = require('mongoose');


// Create an instance of Express
const app = express();

// Define a port number
const PORT = 3000;

// Create a custom route
app.get('/custom_route',(req,res)=>{
    res.send("Hello express");
})

app.get('/',demo

);

function demo(req,res){
    res.send("Hi!");
}


//post 
app.post('/post_test',(req,res)=>{
    res.send("Hello world");
})


//connecting to mongoDB
mongoose.connect('mongodb://127.0.0.1:27018/test')
  .then(() => {console.log('Connected!');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
  }).catch(()=>console.log('connection error'));



// Start the server



