import './CreateProject.scss';

import { Button } from 'components/button';

import ProjectForm from '../projectForm/ProjectForm';

interface ICreateProjectProps {
  active: string,
  setActive: (val: string) => void
}


const CreateProject: React.FC<ICreateProjectProps> = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'create-project' : 'create-project__active'}
      onClick={() => {
        setActive('');
      }}>
      <div className="create-project__content"
        onClick={(e) => e.stopPropagation()}>
        <Button
          onClickBtn={() => {
            setActive('');
          }}>
          Close
        </Button>
        <ProjectForm active={active}></ProjectForm>
      </div>
    </div>
  );
};

export default CreateProject;
