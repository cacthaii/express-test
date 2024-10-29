// Create a new router
const express = require("express");
const router = express.Router();

///////////////////////////////////////////////////////////////////////////////////////////////
// Handle the main routes
///////////////////////////////////////////////////////////////////////////////////////////////

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get('/contact', (req, res) => res.send ('<h1>My contacts~</h1>'))

router.get('/date', (req, res) => {
    // Display current date in real time using built in Date object in js
    const currentDate = new Date();
    res.send (`Current date and time: ${currentDate.toString()}`);
});

// Parameterized route for usernames
router.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`<h1>Welcome, ${userName}!</h1>`);
});

// Export the router object so index.js can access it
module.exports = router;
