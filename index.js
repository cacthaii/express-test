// Set up express
const express = require("express");
const app = express();
const port = 8000; 

// Handle the routes
app.get("/", (req, res) => res.send("Hello World!")); 

app.get('/about', (req, res) => res.send ('<h1>This is the about page</h1>'))

app.get('/contact', (req, res) => res.send ('<h1>My contacts~</h1>'))

app.get('/date', (req, res) => {
    // Display current date in real time using built in Date object in js
    const currentDate = new Date();
    res.send (`Current date and time: ${currentDate.toString()}`);
});

// Parameterized route for usernames
app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`<h1>Welcome, ${userName}!</h1>`);
});

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
