import './ListBody.scss';

import {Task} from 'layouts/board/task';
import {observer} from 'mobx-react-lite';
import {Draggable} from 'react-beautiful-dnd';

const ListBody = ({title, details, priority, id, index}) => {
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
