// Implement API endpoints for CRUD operations on restaurant data:
const Restaurant = require('../models/restaurant');

// Retrieve and send a list of restaurants
const getAllRestaurants = (req, res) => {
  Restaurant.find()
    .then((restaurants) => {
      res.json(restaurants);
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while retrieving restaurants' });
    });
};

// Create a new restaurant
const createRestaurant = (req, res) => {
  const { name, cuisineType, location } = req.body;
  const image = req.file.path; // Assuming the uploaded image file is saved by Multer

  const newRestaurant = new Restaurant({
    name,
    cuisineType,
    location,
    image,
  });

  newRestaurant.save()
    .then(() => {
      res.status(201).json({ message: 'Restaurant created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while creating the restaurant' });
    });
};

// Retrieve and send detailed information about a restaurant
const getRestaurantById = (req, res) => {
  const { id } = req.params;

  Restaurant.findById(id)
    .then((restaurant) => {
      if (restaurant) {
        res.json(restaurant);
      } else {
        res.status(404).json({ error: 'Restaurant not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while retrieving the restaurant' });
    });
};

// Update the details of a restaurant
const updateRestaurant = (req, res) => {
  const { id } = req.params;
  const { name, cuisineType, location } = req.body;

  Restaurant.findByIdAndUpdate(id, { name, cuisineType, location }, { new: true })
    .then((restaurant) => {
      if (restaurant) {
        res.json({ message: 'Restaurant updated successfully' });
      } else {
        res.status(404).json({ error: 'Restaurant not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while updating the restaurant' });
    });
};

// Delete a restaurant
const deleteRestaurant = (req, res) => {
  const { id } = req.params;

  Restaurant.findByIdAndDelete(id)
    .then((restaurant) => {
      if (restaurant) {
        res.json({ message: 'Restaurant deleted successfully' });
      } else {
        res.status(404).json({ error: 'Restaurant not found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred while deleting the restaurant' });
    });
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
