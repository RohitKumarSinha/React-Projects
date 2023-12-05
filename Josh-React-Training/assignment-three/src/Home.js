// Home.js
import React from 'react';
import { homeStyles } from './styles/HomeStyles';

const Home = () => {
  return (
    <div style={homeStyles.container}>
      <h2 style={homeStyles.title}>Welcome to the Home Page</h2>
      <p style={homeStyles.description}>
        This is a Todo App where you can add you ToDo by Login Yourself.
      </p>
    </div>
  );
};

export default Home;
