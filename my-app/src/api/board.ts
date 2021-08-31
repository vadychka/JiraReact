import { IColumn } from './../utils/interfaces';
import axios from 'axios';

import { basicURL, boardRoute } from './routes';

export const getTasks = async (projectId: string) => {
  const res = await axios.get(`${basicURL}/${boardRoute}/${projectId}`);
  return res?.data;
};

export const createTask = async (tasks: IColumn, id: string, boardId: string) => {
  const res = await axios.post(`${basicURL}/${boardRoute}`,
    { tasks, id, boardId });
  return res?.data;
};


export const changeTask = async (source: any, destination: any, columnId: string) => {
  const res = await axios.patch(`${basicURL}/${boardRoute}/drag`,
    { source, destination, columnId });
  return res?.data;
};


export const changeCol = async (sourceItems: any, sourceDrId: string,
  destItems: any, destinationDrId: string, columnId: string) => {
  const res = await axios.patch(`${basicURL}/${boardRoute}/dragC`,
    {
      sourceItems, sourceDrId,
      destItems, destinationDrId, columnId
    });
  return res?.data;
};


