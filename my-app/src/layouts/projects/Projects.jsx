import './Projects.scss';

import {BTN__DEFAULT} from 'common';
import {Button} from 'components/button';
import {observer} from 'mobx-react-lite';
import ProjectsStore from 'store/BoardStore/ProjectsStore';

import Project from './project';
import ProjectSort from './projectSort/ProjectSort';


const Projects = ({setActive}) => {
  return (
    <div className="projects">
      <ProjectSort></ProjectSort>
      <div className={'projects__create-btn'}>
        <Button style={BTN__DEFAULT} onClickBtn={()=>setActive(111)}
        >Add Project</Button>
      </div>

      {ProjectsStore.projects.map((el, index)=>{
        return <Project key={index} title={el.title}
          details={el.details}></Project>;
      })}
    </div>
  );
};

export default observer(Projects);
