import './Project.scss';

import React from 'react';
import {Link} from 'react-router-dom';

const Routs = {
  'projects': '/projects',
  'dashboards': '/content',
};

import {ACCORDION__SHOW} from 'layouts/header/headerBtnBar';
import {observer} from 'mobx-react-lite';
import {useState} from 'react';
import {BoardStore} from 'store';

const Project = ({title, details, projectId}) => {
  const [showTitle, setShowTitle] = useState(false);
  const onclick = () => {
    BoardStore.projectId = projectId;
    BoardStore.getBoard(projectId);
    if (showTitle) {
      return setShowTitle(false);
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
