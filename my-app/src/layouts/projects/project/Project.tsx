import './Project.scss';

import React from 'react';
import { useHistory } from 'react-router-dom';

import { ACCORDION__SHOW } from 'layouts/header/headerBtnBar';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { BoardStore } from 'store';
import { Routes } from 'utils';
import { useTranslation } from 'react-i18next';
import { Button } from 'components';
import { BTN__WHITE } from 'common';

interface IProjectProps {
  title: string,
  details: string,
  projectId: string
}


const Project: React.FC<IProjectProps> = ({ title, details, projectId }) => {
  const history = useHistory()
  const { t } = useTranslation()
  const [showTitle, setShowTitle] = useState('');
  const onclick = () => {
    BoardStore.projectId = projectId;
    BoardStore.getBoard(projectId);
    if (showTitle) {
      return setShowTitle('');
    }
    setShowTitle(ACCORDION__SHOW);
  };
  const onClickBTN = async () => {
    BoardStore.projectId = projectId;
    await BoardStore.getBoard(projectId);
    await history.push(Routes.dashboards)
  }
  return (
    <div className="project">
      <div className="project__title" onClick={onclick}>
        <h2>{title}</h2>
        <Button style={BTN__WHITE} onClickBtn={onClickBTN}>
          {t('projects.dashboard')}
        </Button>
      </div>
      <div className={`project__text ${showTitle}`}>
        {details}
      </div>
    </div>
  );
};

export default observer(Project);
