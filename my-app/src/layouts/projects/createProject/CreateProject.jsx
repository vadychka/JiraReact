import './CreateProject.scss';

import {BTN__DEFAULT} from 'common';
import {Button} from 'components/button';

import ProjectForm from '../projectForm/ProjectForm';


const CreateProject = ({active, setActive}) => {
  return (
    <div
      className={active ? 'create-project' : 'create-project__active'}
      onClick={() => {
        setActive(null);
      }}>
      <div className="create-project__content"
        onClick={(e) => e.stopPropagation()}>
        <Button
          style={BTN__DEFAULT}
          onClickBtn={() => {
            setActive(null);
          }}>
           Close
        </Button>
        <ProjectForm active={active}></ProjectForm>
      </div>
    </div>
  );
};

export default CreateProject;
