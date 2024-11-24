// Import the Express module
const express = require('express');

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


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});