import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Replace with the actual URL of your backend server if different

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
