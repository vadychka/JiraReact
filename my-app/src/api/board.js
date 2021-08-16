import axios from 'axios';

import {basicURL, boardRoute} from './routes';

export const getTasks = async (projectId) => {
  const res = await axios.get(`${basicURL}/${boardRoute}/${projectId}`);
  return res?.data;
};

export const createTask = async (tasks, id, boardId) => {
  const res = await axios.post(`${basicURL}/${boardRoute}`,
      {tasks, id, boardId});
  return res?.data;
};


export const changeTask = async (source, destination, columnId) => {
  const res = await axios.patch(`${basicURL}/${boardRoute}/drag`,
      {source, destination, columnId});
  return res?.data;
};


export const changeCol = async (sourceItems, sourceDrId,
    destItems, destinationDrId, columnId) => {
  const res = await axios.patch(`${basicURL}/${boardRoute}/dragC`,
      {sourceItems, sourceDrId,
        destItems, destinationDrId, columnId});
  return res?.data;
};


