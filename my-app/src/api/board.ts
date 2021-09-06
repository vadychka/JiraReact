import { IBoard, ITask } from './../utils/interfaces';
import axios from 'axios';

import { basicURL, boardRoute } from './routes';

export const getTasks = async (projectId: string): Promise<IBoard> => {
  const res = await axios.get(`${basicURL}/${boardRoute}/${projectId}`);
  return res?.data;
};

export const createTask = async (tasks: ITask, id: string, boardId: string): Promise<ITask> => {

  const res = await axios.post(`${basicURL}/${boardRoute}`,
    { tasks, id, boardId });
  return res?.data;
};


export const changeTask = async (source: ITask[], destination: string, columnId: string): Promise<ITask> => {
  const res = await axios.patch(`${basicURL}/${boardRoute}/drag`,
    { source, destination, columnId });
  return res?.data;
};


export const changeColumn = async (sourceItems: ITask[], sourceDrId: string,
  destItems: ITask[], destinationDrId: string, columnId: string): Promise<string> => {
  const res = await axios.patch(`${basicURL}/${boardRoute}/dragC`,
    {
      sourceItems, sourceDrId,
      destItems, destinationDrId, columnId
    });
  return res?.data;
};


