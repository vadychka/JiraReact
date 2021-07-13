import axios from 'axios';

import {basicURL, boardRout} from './routes';

export const getTasks = async () => {
  const res = await axios.get(`${basicURL}/${boardRout}`);
  return res?.data;
};

export const setTasks = async (tasks, id) => {
  const res = await axios.post(`${basicURL}/${boardRout}`, {tasks, id});
  return res?.data;
};


export const dropTasks = async (source, destination) => {
  const res = await axios.post(`${basicURL}/${boardRout}/drag`,
      {source, destination});
  return res?.data;
};


