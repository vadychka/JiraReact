import { IProject } from './../utils/interfaces';
import axios from 'axios';

import { basicURL, projectsRoute } from './routes';

export const getProjects = async (): Promise<IProject[]> => {
  const res = await axios.get(`${basicURL}/${projectsRoute}`);
  return res?.data;
};
export const pushProject = async (project: IProject): Promise<IProject> => {
  const res = await axios.post(`${basicURL}/${projectsRoute}`, project);
  return res?.data;
};
