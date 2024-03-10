import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency';

type getDevelopersProps = {
  page: number;
};

export const getDevelopers = async ({ page }: getDevelopersProps) => {
  try {
    // const response = await axios.get(`/api/v1/users?page=${page}&count=6`);
    const response = await axios.get(`/api/v1/users?page=${page}&count=6`);
    console.log(response.data.users);
    return response.data.users;
  } catch (error) {
    console.error(error);
  }
};
