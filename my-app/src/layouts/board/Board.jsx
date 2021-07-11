import './Board.scss';

import {observer} from 'mobx-react-lite';
import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {BoardStore} from 'store/BoardStore';

import List from './list/List';

const Board = ({setActive}) => {
  const changeTasks = (source, destination) => {
    if (!destination) return;
    else if (source.droppableId !== destination.droppableId) {
      BoardStore.dropBetweenColumns(source, destination);
    } else {
      BoardStore.dropBetweenTasks(source, destination);
    }
  };
  return (
    <DragDropContext onDragEnd={(result)=>
      changeTasks(result.source, result.destination)}>
      <div className="content" >
        {BoardStore.columns.map((el) =>{
          return <List
            setActive={setActive} key={el.id}
            props={el.name} tasks={el.tasks} list={el}></List>;
        })}
      </div>
    </DragDropContext>
  );
};

export default observer(Board);
