import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://f-e-developer.herokuapp.com/',
});

instance.interceptors.response.use((response) => response.data);

export default instance;
