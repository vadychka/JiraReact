import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectSort.scss';

interface IProjectSortProps {
  setProjects: (el: string) => void
}

const ProjectSort: React.FC<IProjectSortProps> = ({setProjects}) => {
  const { t } = useTranslation()
  return (<div className="project-sort">
    <p>{t('projects.sortBy')} </p>
    <input
      type="text"
      className="project-sort__inp"
      placeholder="&#128270;   Search"
      onChange={(event) => setProjects(event.target.value)}
    />
  </div>
  );
};

export default ProjectSort;
