import './CreateTask.scss';

import { Button } from 'components/button';

import TaskForm from '../taskForm';

interface ICreateTaskProps {
  active: string,
  setActive: (arg: string) => void
}


const CreateTask: React.FC<ICreateTaskProps> = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'create-task' : 'create-task__active'}
      onClick={() => {
        setActive('');
      }}
    >
      <div className="create-task__content"
        onClick={(e) => e.stopPropagation()}>
        <Button
          onClickBtn={() => {
            setActive('');
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
