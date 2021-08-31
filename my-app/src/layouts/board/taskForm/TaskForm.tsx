import './TaskForm.scss';

import { Button } from 'components/button';
import { useForm } from 'react-hook-form';
import { BoardStore } from 'store';

import { detailsTaskValidation, priorityTaskValidation, titleTaskValidation }
  from './validation';

interface ITaskFormProps {
  active: string | null,
}

const TaskForm: React.FC<ITaskFormProps> = (active) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return <form
    className="task-form"
    onSubmit={handleSubmit((task) => {
      BoardStore.postTask(task, active.active);
    })}
  >
    <div>
      <div className="task-form__fields">
        <legend className="task-form__title">Title</legend>
        <p className="task-form__errors">{errors?.title?.message}</p>
      </div>
      <input
        type="text"
        className="task-form__field"
        placeholder="Enter text"
        // name="Title"
        {...register('title', titleTaskValidation)}
      ></input>
    </div>
    <fieldset>
      <div className="task-form__fields">
        <legend className="task-form__title">Details </legend>{' '}
        <p className="task-form__errors">{errors?.details?.message}</p>
      </div>
      <input
        type="text"
        className="task-form__field"
        placeholder="Enter text"
        // name="Details"
        {...register('details', detailsTaskValidation)}
      ></input>
    </fieldset>
    <div>
      <select
        className="task-form__select"
        {...register('priority', priorityTaskValidation)}
      >
        <option disabled>
          Priority
        </option>
        <option>low</option>
        <option>high</option>
        <option>urgent</option>
      </select>
    </div>
    <Button>
      Add
    </Button>
  </form>;
};

export default TaskForm;
