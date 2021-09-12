import './Projects.scss';

import { Button } from 'components/button';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import ProjectsStore from 'store/ProjectsStore';

import Project from './project';
import ProjectSort from './projectSort/ProjectSort';
import { useTranslation } from 'react-i18next';

interface IProjectsProps {
  setActive: (val: string) => void
}

const Projects: React.FC<IProjectsProps> = ({ setActive }) => {
  const [searchProjects, setProjects] = useState('')
  const { t } = useTranslation()
  const filterProjects = ProjectsStore.projects.filter(el => {
    return el.title.toLowerCase().includes(searchProjects.toLowerCase())
  })
  return (
    <div className="projects">
      <ProjectSort setProjects={setProjects}></ProjectSort>
      <div className={'projects__create-btn'}>
        <Button onClickBtn={() => setActive('111')}
        >{t('projects.add_project')}</Button>
      </div>

      {filterProjects.map((el, index) => {
        return <Project key={index} title={el.title}
          details={el.details} projectId={el._id}></Project>;
      })}
    </div>
  );
};

export default observer(Projects);
