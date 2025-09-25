
import axios from 'axios';

// Create an axios instance
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Set the base URL for all requests
  timeout: 10000,  // Optional: Set a timeout for requests (in ms)
  headers: {
    'Content-Type': 'application/json',  // Default header
    // You can add other headers like Authorization if needed
  },
});

export const getProjects = async () => {
    try {
      const res = await axiosInstance.get('/projects');
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };
  
  export const getSkills = async () => {
    try {
      const res = await axiosInstance.get('/skills');
      return res.data;
    } catch (err) {
      throw err.response?.data || { message: err.message || 'Unknown error' };
    }
  };
  