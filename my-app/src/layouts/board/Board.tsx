import './Board.scss';

import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { useHistory } from 'react-router';
import { BoardStore } from 'store';
import { Routes } from 'utils';

import List from './list/List';
import { IColumn } from 'utils/interfaces';


interface IBoardProps {
  setActive: (val: string) => void
}

const Board: React.FC<IBoardProps> = ({ setActive }) => {
  const history = useHistory<string>();
  const { columns } = BoardStore;

  useEffect(() => {
    if (!columns.length) {
      history.push(Routes.projects);
    }
  }, [columns, history]);
  if (!columns.length) {
    return null;
  }
  const changeTasks = (source: DraggableLocation, destination: DraggableLocation | undefined) => {
    if (!destination) return;
    else if (source.droppableId !== destination.droppableId) {
      BoardStore.dropBetweenColumns(source, destination);
    } else {
      BoardStore.dropBetweenTasks(source, destination);
    }
  };
  return (
    <DragDropContext onDragEnd={(result: DropResult) =>
      changeTasks(result.source, result.destination)}>
      <div className="board" >
        {BoardStore.columns.map((el: IColumn) => {
          return <List
            setActive={setActive} key={el._id}
            title={el.title} tasks={el.tasks} list={el}></List>;
        })}
      </div>
    </DragDropContext>
  );
};

export default observer(Board);
