import './ListBody.scss';

import { Task } from 'layouts/board/task';
import { observer } from 'mobx-react-lite';
import { Draggable } from 'react-beautiful-dnd';

interface IListBodyProps {
  title: string,
  details: string,
  priority: string
  id: string
  index: number
}

const ListBody: React.FC<IListBodyProps> = ({ title, details, priority, id, index }) => {
  return (<Draggable key={id}
    draggableId={id} index={index}>
    {(provided) => (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <Task details={details} title={title}
          priority={priority} key={id}></Task>
      </div>
    )}
  </Draggable>);
};

export default observer(ListBody);
