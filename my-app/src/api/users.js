import axios from 'axios';

import {basicURL, usersRoute} from './routes';

export const getUsers = async () => {
  const res = await axios.get(`${basicURL}/${usersRoute}`);
  return res?.data;
};

// export const createUser = async (data) => {
//   const res = await axios.post(`${basicURL}/${usersRoute}`, data);
//   return res?.data;
// };
