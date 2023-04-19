const API_URL = 'http://localhost:3001/api';

export const getHome = async () => {
  const responce = await fetch(`${API_URL}/homes`);
  const { homes } = await responce.json();
  return homes;
};
