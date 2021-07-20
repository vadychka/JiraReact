import {getProjects} from 'api';
import {changeTask, getTasks, setTask} from 'api/board';
import {pushProject} from 'api/projects';
import {makeAutoObservable} from 'mobx';

class BoardStore {
  columns = []
  projects = []
  Routs = {
    'projects': '/projects',
    'dashboards': '/content',
    'RegisterNewUser': './RegisterNewUser',
  };

  users= []

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
    this.changePriority(sourceItems, source.droppableId);
    destColumn.tasks = destItems;
    this.changePriority(destItems, destination.droppableId);
  }

  dropBetweenTasks(source, destination) {
    const userTask = this.columns.find((el)=>
      el.id === destination.droppableId );
    const items = userTask.tasks;
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    userTask.tasks = items;
    this.changePriority(items, destination.droppableId);
  }

  async changePriority(items, id) {
    await changeTask(items, id);
  }

  setProjects(value) {
    this.projects = value;
  }

  setColumns(value) {
    this.columns = value;
  }

  setNewUser(data) {
    this.users.push(data);
    console.log(data);
  }

  async postProject(data) {
    const project = await pushProject(data);
    if (project) {
      this.projects.push(project);
    }
  }

  async postTask(data, colId) {
    const newTask = await setTask(data, colId);
    if (newTask) {
      const findColumn = this.columns.find((el)=> el.id === colId,
      );
      findColumn.tasks.push(newTask);
    }
  }

  async getInitData() {
    const res = await getProjects();
    const resTasks = await getTasks();
    this.setColumns(resTasks);
    this.setProjects(res);
  }
}

export default new BoardStore();
