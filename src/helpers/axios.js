import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/',
  // baseURL: 'https://f-e-developer.herokuapp.com/',
});

instance.interceptors.response.use((response) => response.data);

export default instance;
