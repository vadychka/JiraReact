import {getProjects} from 'api';
import {pushProject} from 'api/projects';
const {makeAutoObservable} = require('mobx');

class ProjectsStore {
   projects = []


   constructor() {
     makeAutoObservable(this);
     this.getInitData();
   }

   setProjects(value) {
     this.projects = value;
   }
   async postProject(data) {
     const project = await pushProject(data);
     if (project) {
       this.projects.push(project);
     }
   }
   async getInitData() {
     const res = await getProjects();
     this.setProjects(res);
   }
}


export default new (ProjectsStore)();
