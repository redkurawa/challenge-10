import axios from 'axios';

const API = axios.create({
  baseURL: 'https://blogger-wph-api-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signupUser = (data: {
  name: string;
  email: string;
  password: string;
}) => API.post('/auth/register', data);

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const res = await API.post('/auth/login', data);
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log('API Login Error Response:', err.response);
    } else {
      console.log('Unexpected Error:', err);
    }
    throw err;
  }
};
