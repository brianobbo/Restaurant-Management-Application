

// Require the necessary dependencies at the top of the server.js file:

const console = require('console');
// implement logging using the built-in console.log function:

const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Set the destination folder for uploaded files
const mongoose = require('mongoose');

// Define the port number for the server:
const port = 3000; // You can change this to your desired port number

// Set up the middleware to parse JSON requests:
app.use(express.json());

// Define the routes for your application (we will implement these later):
app.get('/api/restaurants', (req, res) => {
    // Retrieve and send a list of restaurants

    console.log('Received GET request to /api/restaurants');


});

app.post('/api/restaurants', upload.single('image'), (req, res) => {
    // Create a new restaurant
    // console.log('Post new Restaurant');
    const { name, cuisineType, location } = req.body;
    console.log('Received data:', name, cuisineType, location);

});

app.get('/api/restaurants/:id', (req, res) => {
    // Retrieve and send detailed information about a restaurant
});

app.put('/api/restaurants/:id', upload.single('image'), (req, res) => {
    // Update the details of a restaurant
});

app.delete('/api/restaurants/:id', (req, res) => {
    // Delete a restaurant
});




// Set up a connection to MongoDB using Mongoose:
mongoose.connect('mongodb://localhost:27017/restaurantDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

