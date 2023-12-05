// src/GetPage.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GetPage: React.FC = () => {
  const location = useLocation();
  const [postData, setPostData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the dummy data fetching logic with your actual getApi function
        // const response = await getApi();
        // setPostData(response);

        // For demonstration purposes, I'm setting some dummy data here
        const dummyData = { id: 1, title: 'Dummy Data' };
        setPostData([dummyData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Extract the response data from the location state
    const responseData = location.state?.responseData;

    if (responseData) {
      setPostData([responseData]);
    } else {
      fetchData();
    }
  }, [location.state]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Get Page</h1>
      <ul className="list-group">
        {postData.map((post: any) => (
          <li key={post.id} className="list-group-item">
            <strong>ID:</strong> {post.id}, <strong>Title:</strong> {post.title} , <strong>Price:</strong> {post.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetPage;
