import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/api/restaurants')
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Restaurant List</h1>
      <Link to="/create">Add New Restaurant</Link>
      {restaurants.map((restaurant) => (
        <div key={restaurant._id}>
          <h2>{restaurant.name}</h2>
          <p>Cuisine: {restaurant.cuisineType}</p>
          <p>Location: {restaurant.location}</p>
          <Link to={`/restaurants/${restaurant._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
