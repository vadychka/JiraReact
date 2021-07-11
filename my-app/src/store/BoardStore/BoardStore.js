import {getProjects} from 'api';
import {dropTasks, getTasks, setTasks} from 'api/board';
import {pushProject} from 'api/projects';
import {makeAutoObservable} from 'mobx';

class BoardStore {
  columns = []
  projects = []

  constructor() {
    makeAutoObservable(this);

    this.getInitData();
  }

  dropBetweenColumns(source, destination) {
    const sourceColumn = this.columns.find((el)=>
      el.id === source.droppableId);
    const destColumn = this.columns.find((el) =>
      el.id === destination.droppableId);
    const sourceItems = [...sourceColumn.tasks];
    const destItems = [...destColumn.tasks];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    sourceColumn.tasks = sourceItems;
    destColumn.tasks = destItems;
  }

  dropBetweenTasks(source, destination) {
    const userTask = this.columns.find((el)=>
      el.id === destination.droppableId );
    const items = userTask.tasks;
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    userTask.tasks = items;
    // this.pushDrop(items, destination.droppableId);
  }

  // async pushDrop(items, id) {
  //   await dropTasks(items, id);
  // }

  setProjects(value) {
    this.projects = value;
  }

  setColumns(value) {
    this.columns = value;
  }

  async postProject(data) {
    const project = await pushProject(data);
    if (project) {
      this.projects.push(project);
    }
  }

  postTask(data, elId) {
    setTasks(data, elId);
    if (data) {
      const findColumn = this.columns.find((el)=> el.id === elId,
      );
      findColumn.tasks.push(data);
    }
  }

  async getInitData() {
    const res = await getProjects();
    const resTasks = await getTasks();
    this.setColumns(resTasks);
    this.setProjects(res);
  }
  // addProject(data) {
  //   getProjects();
  //   this.projects.push(data);
  // }
}

export default new BoardStore();
