import './HeaderMenu.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from 'utils';


const HeaderMenu = () => {
  return (
    <div className="header__menu">
      <a href="#1" className="header__menu-link">
        Your work
      </a>
      <Link to={Routes.projects} className="header__menu-link">
        Projects
      </Link>
      <a href="#3" className="header__menu-link">
        Filters
      </a>
      <Link to={Routes.dashboards} className="header__menu-link">
        Dashboards
      </Link>
      <a href="#5" className="header__menu-link">
        People
      </a>
      <a href="#6" className="header__menu-link">
        Plans
      </a>
      <a href="#7" className="header__menu-link">
        Apps
      </a>
    </div>
  );
};

export default HeaderMenu;
