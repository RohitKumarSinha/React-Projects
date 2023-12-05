// src/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to My React App!</h1>
        <p className="lead">This is a simple React app for demonstrating the Use of POST api to create a product item with 2 fields - title, price, handle success and errors.</p>
        <hr className="my-4" />
        <p>Click the Navbar buttons in the navigation bar to explore different pages.</p>
      </div>
    </div>
  );
};

export default HomePage;
