import './List.scss';

import { observer } from 'mobx-react-lite';
import { Droppable } from 'react-beautiful-dnd';

import { ListBody } from '../listBody';
import { IColumn, ITask } from 'utils/interfaces';

interface IListProps {
  props: string,
  setActive: (id: string) => void,
  tasks: ITask[],
  list: IColumn
}

const List: React.FC<IListProps> = ({ props, setActive, tasks, list }) => {
  return (
    <div className="list">
      <div className="list__title">
        <h2>
          {props} ( {tasks.length} )
        </h2>
        <button
          onClick={() => {
            setActive(list._id);
          }}
        >
          +
        </button>
      </div>
      <Droppable droppableId={list._id}>
        {(provided) => (
          <div className='list__body'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((data, index) => {
              return (
                <ListBody details={data.details} title={data.title}
                  key={data._id}
                  priority={data.priority} index={index} id={data._id}
                ></ListBody>
              );
            },
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div >
  );
};


export default observer(List);
