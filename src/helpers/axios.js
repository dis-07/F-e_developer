import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

instance.interceptors.response.use((response) => response.data);

export default instance;
