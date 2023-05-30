import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://f-e-developer.herokuapp.com/api',
});

instance.interceptors.response.use((response) => response.data);

export default instance;
