import './Task.scss';

import {observer} from 'mobx-react-lite';
import React from 'react';

const Task = ({priority, title, details}) => {
  return (
    <div className={`task task__${priority}`}>
      <h2>{title}</h2>
      <p className="task__details">{details}</p>
    </div>
  );
};

export default observer(Task);
