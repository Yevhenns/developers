import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency';

export const getDevelopers = async () => {
  try {
    const response = await axios.get('/api/v1/users?page=1&count=5');
    return response.data.users;
  } catch (error) {
    console.error(error);
  }
};
