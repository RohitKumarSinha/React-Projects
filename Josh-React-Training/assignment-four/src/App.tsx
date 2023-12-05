// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostPage from './PostPage';
import GetPage from './GetPage';
import HomePage from './HomePage';
import Navbar from './Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/get" element={<GetPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
