import axios from 'axios';

const accessToken = localStorage.getItem('access_token')? localStorage.getItem('access_token') : '';

export default axios.create({
  baseURL: `http://127.0.0.1:8000/api/`,
  headers: {
    'Authorization':  `Bearer ${accessToken}`,
    'Content-Type' :  'application/json',
    'accept' :  'application/json',
  }
});
