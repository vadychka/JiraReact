import './CreateTask.scss';

import {Button} from 'components/button';

import TaskForm from '../taskForm';


const CreateTask = ({active, setActive}) => {
  return (
    <div
      className={active ? 'create-task' : 'create-task__active'}
      onClick={() => {
        setActive(null);
      }}
    >
      <div className="create-task__content"
        onClick={(e) => e.stopPropagation()}>
        <Button
          onClickBtn={() => {
            setActive(null);
          }}
        >
          Close
        </Button>
        <TaskForm active={active}></TaskForm>
      </div>
    </div>
  );
};
export default CreateTask;
