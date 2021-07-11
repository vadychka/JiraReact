import './ProjectForm.scss';

import {BTN__DEFAULT} from 'common';
import {Button} from 'components/button';
import {useForm} from 'react-hook-form';
import {BoardStore} from 'store/BoardStore';

import {detailsTaskValidation, titleTaskValidation} from './validation';


const ProjectForm = (active) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  return <form
    className="project-form"
    onSubmit={handleSubmit((data) => {
      BoardStore.postProject(data, active);
    })}
  >
    <div>
      <div className="project-form__fields">
        <legend className="project-form__title">Title</legend>
        <p className="project-form__errors">{errors?.title?.message}</p>
      </div>
      <input
        type="text"
        className="project-form__field"
        placeholder="Enter text"
        name="Title"
        {...register('title', titleTaskValidation)}
      ></input>
    </div>
    <fieldset>
      <div className="project-form__fields">
        <legend className="task-form__title">Details </legend>{' '}
        <p className="project-form__errors">{errors?.details?.message}</p>
      </div>
      <textarea
        rows="4" cols="50"
        type="text"
        className="project-form__field "
        placeholder="Enter text"
        name="Details"
        {...register('details', detailsTaskValidation)}
      ></textarea>
    </fieldset>
    <Button style={BTN__DEFAULT}>
        Add
    </Button>
  </form>;
};

export default ProjectForm;
