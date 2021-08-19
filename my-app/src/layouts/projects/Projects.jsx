import './Projects.scss';

import {Button} from 'components/button';
import {observer} from 'mobx-react-lite';
import React from 'react';
import ProjectsStore from 'store/ProjectsStore';

import Project from './project';
import ProjectSort from './projectSort/ProjectSort';


const Projects = ({setActive}) => {
  return (
    <div className="projects">
      <ProjectSort></ProjectSort>
      <div className={'projects__create-btn'}>
        <Button onClickBtn={()=>setActive(111)}
        >Add Project</Button>
      </div>

      {ProjectsStore.projects.map((el, index)=>{
        return <Project key={index} title={el.title}
          details={el.details} projectId={el._id}></Project>;
      })}
    </div>
  );
};

export default observer(Projects);
