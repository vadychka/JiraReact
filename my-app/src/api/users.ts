import { INewUser } from 'utils/interfaces';
import axios from 'axios';

import { basicURL, usersRoute } from './routes';

export const getUser = async (name: string, password: string) => {
  const res = await axios.get(`${basicURL}/${usersRoute}/${name}/${password}`);
  return res?.data;
};

export const addUser = async (data: INewUser) => {
  const res = await axios.post(`${basicURL}/${usersRoute}`, data);
  return res?.data;
};
