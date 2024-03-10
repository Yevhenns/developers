import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

type getDevelopersProps = {
  page: number;
};

export const getDevelopers = async ({ page }: getDevelopersProps) => {
  try {
    const response = await axios.get(`/users?page=${page}&count=6`);
    console.log(response.data);
    return response.data as DevelopersResponse;
  } catch (error) {
    console.error(error);
  }
};

export const getPositions = async () => {
  try {
    const response = await axios.get('/positions');
    return response.data.positions;
  } catch (error) {
    console.error(error);
  }
};
