
import {changeCol,
  changeTask, createTask, getTasks} from 'api/board';
import {makeAutoObservable} from 'mobx';

class BoardStore {
  columns = []
  projectId = ''
  // board={
  //   columns: [],
  //   ptojectId: ''
  // }

  constructor() {
    makeAutoObservable(this);
  }

  dropBetweenColumns(source, destination) {
    const sourceColumn = this.columns.find((el)=>
      el._id === source.droppableId);
    const destColumn = this.columns.find((el) =>
      el._id === destination.droppableId);
    const sourceItems = [...sourceColumn.tasks];
    const destItems = [...destColumn.tasks];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    sourceColumn.tasks = sourceItems;
    destColumn.tasks = destItems;
    this.changePriorityColumn(sourceItems, source.droppableId,
        destItems, destination.droppableId);
  }

  dropBetweenTasks(source, destination) {
    const userTask = this.columns.find((el)=>
      el._id === destination.droppableId );
    const items = userTask.tasks;
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    userTask.tasks = items;
    this.changePriority(items, destination.droppableId);
  }

  async changePriorityColumn(sourceItems, sourceDrId,
      destItems, destinationDrId) {
    await changeCol(sourceItems, sourceDrId,
        destItems, destinationDrId, this.projectId);
  }

  async changePriority(items, id) {
    await changeTask(items, id, this.projectId);
  }

  setColumns(value) {
    this.columns = value;
  }

  async postTask(data, colId) {
    const newTask = await createTask(data, colId, this.projectId);
    if (newTask) {
      const findColumn = this.columns.find((el)=> el._id === colId,
      );

      findColumn.tasks.push(newTask);
    }
  }

  async getBoard(projectId) {
    const resTasks = await getTasks(projectId);
    this.setColumns(resTasks.column);
  }
}

export default new BoardStore();
