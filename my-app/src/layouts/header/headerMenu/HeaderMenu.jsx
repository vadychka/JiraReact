import './HeaderMenu.scss';

import React from 'react';
import {Link} from 'react-router-dom';

const Routs = {
  'projects': '/projects',
  'dashboards': '/content',
};

const HeaderMenu = () => {
  return (
    <div className="header__menu">
      <a href="#1" className="header__menu-link">
        Your work
      </a>
      <Link to={Routs.projects} className="header__menu-link">
        Projects
      </Link>
      <a href="#3" className="header__menu-link">
        Filters
      </a>
      <Link to={Routs.dashboards} className="header__menu-link">
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
