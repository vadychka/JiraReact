import { IProject } from './../utils/interfaces';
import { getProjects } from 'api';
import { pushProject } from 'api/projects';
const { makeAutoObservable } = require('mobx');

class ProjectsStore {
  projects: IProject[] = []


  constructor() {
    makeAutoObservable(this);
    this.getInitData();
  }

  setProjects(value: IProject[]) {
    this.projects = value;
  }
  async postProject(data: IProject) {
    const project = await pushProject(data);
    if (project) {
      this.projects.unshift(project);
    }
  }
  async getInitData() {
    const res = await getProjects();
    this.setProjects(res);
  }
}


export default new (ProjectsStore)();
