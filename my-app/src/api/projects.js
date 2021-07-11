import axios from 'axios';

import {basicURL, projectsRout} from './routes';

export const getProjects = async () => {
  const res = await axios.get(`${basicURL}/${projectsRout}`);
  return res?.data;
};
export const pushProject = async (project) => {
  const res = await axios.post(`${basicURL}/${projectsRout}`, project);
  return res?.data;
};
