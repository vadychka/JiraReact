import { IColumn, ITask } from './../utils/interfaces';

import {
  changeColumn,
  changeTask, createTask, getTasks
} from 'api/board';
import { makeAutoObservable } from 'mobx';
import { DraggableLocation } from 'react-beautiful-dnd';

class BoardStore {
  columns: IColumn[] = []
  projectId: string = ''

  constructor() {
    makeAutoObservable(this);
  }

  dropBetweenColumns(source: DraggableLocation, destination: DraggableLocation) {
    const sourceColumn = this.columns.find((el) =>
      el._id === source.droppableId);
    const destColumn = this.columns.find((el) =>
      el._id === destination.droppableId);
    if (sourceColumn && destColumn) {
      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      sourceColumn.tasks = sourceItems;
      destColumn.tasks = destItems;
      this.changePriorityColumn(sourceItems, source.droppableId,
        destItems, destination.droppableId);
    }
  }

  dropBetweenTasks(source: DraggableLocation, destination: DraggableLocation) {
    const userTask = this.columns.find((el) =>
      el._id === destination.droppableId);
    if (userTask) {
      const items = userTask.tasks;
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      userTask.tasks = items;
      this.changePriority(items, destination.droppableId);
    }
  }

  async changePriorityColumn(sourceItems: ITask[], sourceDrId: string,
    destItems: ITask[], destinationDrId: string) {
    await changeColumn(sourceItems, sourceDrId,
      destItems, destinationDrId, this.projectId);
  }

  async changePriority(items: ITask[], id: string) {
    await changeTask(items, id, this.projectId);
  }

  setColumns(value: IColumn[]) {
    this.columns = value;
  }

  async postTask(data: ITask, colId: string) {
    const newTask = await createTask(data, colId, this.projectId);
    if (newTask) {
      const findColumn = this.columns.find((el) => el._id === colId,
      );
      if (findColumn) {
        findColumn.tasks.push(newTask);
      }
    }
  }

  async getBoard(projectId: string) {
    const resTasks = await getTasks(projectId);
    this.setColumns(resTasks.column);
  }
}

export default new BoardStore();
