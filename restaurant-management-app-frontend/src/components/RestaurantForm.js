import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


const RestaurantForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('cuisineType', cuisineType);
    formData.append('location', location);
    formData.append('image', image);

    if (id) {
      axios.put(`/api/restaurants/${id}`, formData)
        .then(() => {
          history.push('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      axios.post('/api/restaurants', formData)
        .then(() => {
          history.push('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Restaurant' : 'Create Restaurant'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="cuisineType">Cuisine Type:</label>
          <input type="text" id="cuisineType" value={cuisineType} onChange={(e) => setCuisineType(e.target.value)} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default RestaurantForm;
