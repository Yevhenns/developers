import axios from 'axios';

axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getDevelopers = async (page: number) => {
  try {
    const response = await axios.get(`/users?page=${page}&count=6`);
    return response.data as DevelopersResponse;
  } catch (error) {
    console.error(error);
  }
};

export const getPositions = async () => {
  try {
    const response = await axios.get('/positions');
    return response.data.positions as Positions;
  } catch (error) {
    console.error(error);
  }
};

export const getToken = async () => {
  try {
    const response = await axios.get('/token');
    return response.data as Token;
  } catch (error) {
    console.error(error);
  }
};

export const registerNewDeveloper = async ({ formData, token }: registerNewDeveloperProps) => {
  try {
    const response = await axios.post(
      '/users',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position_id: formData.position_id,
        photo: formData.photo[0],
      },
      { headers: { Token: token, 'Content-Type': 'multipart/form-data' } }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
