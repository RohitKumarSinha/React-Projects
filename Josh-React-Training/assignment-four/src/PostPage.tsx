// src/PostPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postApi } from './api';

const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({ title: '', price: '' });
  const [error, setError] = useState<string | null>(null);

  const handlePost = async () => {
    try {
      // Simple validation: Check if either title or price is empty
      if (!postData.title.trim() || !postData.price.trim()) {
        setError('Please fill in both Title and Price.');
        return;
      }

      const response = await postApi(postData);
      console.log('Post Response:', response);

      // Navigate to GetPage with the response data
      navigate('/get', { state: { responseData: response } });
    } catch (error) {
      console.error('Error posting data:', error);
      setError('Error posting data. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Post Page</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title:</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price:</label>
        <input
          type="text"
          id="price"
          className="form-control"
          value={postData.price}
          onChange={(e) => setPostData({ ...postData, price: e.target.value })}
        />
      </div>
      <button className="btn btn-primary" onClick={handlePost}>Post Data</button>
    </div>
  );
};

export default PostPage;
