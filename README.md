# Restaurant Management Application

This is a web-based application for managing restaurant details. It provides features for creating, reading, updating, and deleting restaurants, along with a user-friendly interface for interacting with the data.

## Table of Contents
- [Getting Started](#getting-started)
- [Backend Documentation](#backend-documentation)
- [Frontend Documentation](#frontend-documentation)
- [Unit Testing Documentation](#unit-testing-documentation)
- [Additional Dependencies](#additional-dependencies)
- [Limitations and Considerations](#limitations-and-considerations)
- [Additional Resources](#additional-resources)

## Getting Started

To run the restaurant management application locally, follow these steps:

### Prerequisites
- Node.js (version 16.4.1)
- MongoDB (version 5.0.18)

### Backend Setup
1. Clone the repository: `git clone https://github.com/your-username/restaurant-management-app.git`
2. Navigate to the backend directory: `cd restaurant-management-app/restaurant-management-app-backend`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Set the necessary environment variables for your MongoDB connection
5. Start the backend server: `npm start`

### Frontend Setup
1. Navigate to the frontend directory: `cd restaurant-management-app/restaurant-management-app-frontend`
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm start`

## Backend Documentation

The backend of the application is built using Express.js and MongoDB for data storage. It provides the following API endpoints:

- **GET /api/restaurants**: Retrieves a list of all restaurants.
- **GET /api/restaurants/:id**: Retrieves detailed information about a specific restaurant.
- **POST /api/restaurants**: Creates a new restaurant.
- **PUT /api/restaurants/:id**: Updates an existing restaurant.
- **DELETE /api/restaurants/:id**: Deletes a restaurant.

### Request/Response Formats
- **GET /api/restaurants**
  - Request: No request body is required.
  - Response: Returns an array of restaurant objects.

- **GET /api/restaurants/:id**
  - Request: No request body is required.
  - Response: Returns detailed information about the specified restaurant.

- **POST /api/restaurants**
  - Request: Requires a multipart/form-data body with the following fields: name, cuisineType, location, and image (file upload).
  - Response: Returns the newly created restaurant object.

- **PUT /api/restaurants/:id**
  - Request: Requires a multipart/form-data body with the fields to update: name, cuisineType, location, and image (file upload).
  - Response: Returns the updated restaurant object.

- **DELETE /api/restaurants/:id**
  - Request: No request body is required.
  - Response: Returns a success message upon successful deletion.

## Frontend Documentation

The frontend of the application is built using React and provides the following pages/components:

- **RestaurantList**: Displays a list of restaurants with basic details and an option to view details or edit/delete each restaurant.
- **RestaurantDetails**: Shows detailed information about a selected restaurant, including name, cuisine type, location, and an image.
- **RestaurantForm**: Provides a form to create a new restaurant or update an existing one with fields for name, cuisine type, location, and an image upload.

## Unit Testing Documentation

Unit tests have been implemented to validate key functionalities of the application. The testing framework used is Jest.

To run the unit tests, navigate to the backend directory and run the following command:


### Covered Components/Functionalities
- API endpoints for restaurant CRUD operations
- Database operations for storing/retrieving restaurant data
- User interface interactions and validations

## Additional Dependencies

- Express.js (version 4.18.2)
- MongoDB (version 5.0.18)
- React (version 18.2.0)
- axios (version 1.4.0)
- react-router-dom (version 6.12.1)

To install the dependencies, navigate to the respective directories (backend/frontend) and run the command `npm install`.

## Limitations and Considerations

- The application currently stores restaurant images on the local file system. Consider implementing a cloud storage solution for scalability and redundancy.
- Authentication and authorization mechanisms are not implemented in the current version. Consider adding user authentication to protect sensitive data and restrict access to certain functionalities.

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://reactjs.org/)
- [Jest Documentation](https://jestjs.io/)


