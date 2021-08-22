import './SideBar.scss';

import { observer } from 'mobx-react-lite';
import React from 'react';
import { FC } from 'react';

interface ISideBarProps {
  isActive: boolean
}

const SideBar: FC<ISideBarProps> = ({ isActive }) => {
  return (
    <div className={`sideBar ${isActive && 'sideBar__show'}`}>
      <div className="sideBar__link">
        <a href="#1">Board</a>
      </div>
      <div className="sideBar__link">
        <a href="#2"> Road map</a>
      </div>
      <div className="sideBar__link">
        <a href="#3">Backlog</a>
      </div>
      <div className="sideBar__link">
        <a href="#4">Active sprints</a>
      </div>
      <div className="sideBar__link">
        <a href="#5Ы">Reports</a>
      </div>
    </div>
  );
};

export default observer(SideBar);
