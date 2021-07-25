
import {changeTask, createTask, getTasks} from 'api/board';
import {makeAutoObservable} from 'mobx';

class BoardStore {
  columns = []
  projectId = ''

  constructor() {
    makeAutoObservable(this);
    // this.getInitData();
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

  setColumns(value) {
    this.columns = value;
  }

  async postTask(data, colId) {
    const newTask = await createTask(data, colId, this.projectId);
    if (newTask) {
      const findColumn = this.columns.find((el)=> el.id === colId,
      );
      findColumn.tasks.push(newTask);
    }
  }

  async getBoard(projectId) {
    const resTasks = await getTasks(projectId);
    this.setColumns(resTasks);
  }

  // async getInitData() {
  //   const resTasks = await getTasks(this.projectId);
  //   this.setColumns(resTasks);
  // }
}

export default new BoardStore();
