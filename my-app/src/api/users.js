import axios from 'axios';

import {basicURL, usersRoute} from './routes';

export const getUser = async (name, password) => {
  const res = await axios.get(`${basicURL}/${usersRoute}/${name}/${password}`);
  return res?.data;
};

export const createUserBack = async (data) => {
  const res = await axios.post(`${basicURL}/${usersRoute}`, data);
  return res?.data;
};
