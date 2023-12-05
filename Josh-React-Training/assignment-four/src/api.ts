// src/api.ts
const API_BASE_URL = "https://dummyjson.com";

export const postApi = async (postData: any) => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to post data. Status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; // Re-throw the error for the calling code to handle
    }
  };

export const getApi = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  return await response.json();
};
