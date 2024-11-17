import axios from 'axios';

const API_URL = '/api';

export const registerUser = async (username, password) => {
  return await axios.post(`${API_URL}/auth/register`, { username, password });
};

export const loginUser = async (username, password) => {
  return await axios.post(`${API_URL}/auth/login`, { username, password });
};

export const addStudySession = async (token, date, duration) => {
  return await axios.post(`${API_URL}/study/add-session`, 
    { date, duration },
    { headers: { 'x-auth-token': token } }
  );
};

export const getStudySessions = async (token) => {
  return await axios.get(`${API_URL}/study/sessions`, {
    headers: { 'x-auth-token': token }
  });
};
