import './Project.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { ACCORDION__SHOW } from 'layouts/header/headerBtnBar';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { BoardStore } from 'store';

const Routs = {
  'projects': '/projects',
  'dashboards': '/content',
};

interface IProjectProps {
  title: string,
  details: string,
  projectId: string
}


const Project: React.FC<IProjectProps> = ({ title, details, projectId }) => {
  const [showTitle, setShowTitle] = useState('');
  const onclick = () => {
    BoardStore.projectId = projectId;
    BoardStore.getBoard(projectId);
    if (showTitle) {
      return setShowTitle('');
    }
    setShowTitle(ACCORDION__SHOW);
  };
  return (
    <div className="project">
      <div className="project__title" onClick={onclick}>
        <h2>{title}</h2>
        <Link to={Routs.dashboards} className="project__link">
          Dashboard
        </Link>
      </div>
      <div className={`project__text ${showTitle}`}>
        {details}
      </div>
    </div>
  );
};

export default observer(Project);
