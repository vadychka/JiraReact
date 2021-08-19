import './Board.scss';

import {observer} from 'mobx-react-lite';
import React, {useEffect} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {useHistory} from 'react-router';
import {BoardStore} from 'store';
import {Routes} from 'utils';

import List from './list/List';

const Board = ({setActive}) => {
  const history= useHistory();
  const {columns} = BoardStore;

  useEffect(()=> {
    if (!columns.length) {
      history.push( Routes.projects);
    }
  }, [columns]);
  if (!columns.length) {
    return null;
  }
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
            setActive={setActive} key={el._id}
            props={el.title} tasks={el.tasks} list={el}></List>;
        })}
      </div>
    </DragDropContext>
  );
};

export default observer(Board);
