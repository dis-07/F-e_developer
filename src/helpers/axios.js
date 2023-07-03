import axios from 'axios';

const API_URL = 'https://spectalux-back-end-b7762c2f3b71.herokuapp.com';
const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.response.use((response) => response.data);

export default instance;
