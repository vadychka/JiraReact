import './List.scss';

import {observer} from 'mobx-react-lite';
import {Droppable} from 'react-beautiful-dnd';

import {ListBody} from '../listBody';

const List = ({props, setActive, tasks, list}) => {
  return (
    <div className="list">
      <div className="list__title">
        <h2>
          {props} ( {tasks.length} )
        </h2>
        <button
          onClick={() => {
            setActive({id: list.id});
          }}
        >
          +
        </button>
      </div>
      <Droppable droppableId={list.id}>
        {(provided) => (
          <div className='list__body'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((data, index) => {
              return (
                <ListBody details={data.details} title={data.title}
                  priority={data.priority} index={index} id={data.id + 'id'}
                ></ListBody>
              );
            },
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};


export default observer(List);
