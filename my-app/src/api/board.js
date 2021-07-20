import axios from 'axios';

import {basicURL, boardRoute} from './routes';

export const getTasks = async () => {
  const res = await axios.get(`${basicURL}/${boardRoute}`);
  return res?.data;
};

export const setTask = async (tasks, id) => {
  const res = await axios.post(`${basicURL}/${boardRoute}`, {tasks, id});
  return res?.data;
};


export const changeTask = async (source, destination) => {
  const res = await axios.patch(`${basicURL}/${boardRoute}/drag`,
      {source, destination});
  return res?.data;
};


