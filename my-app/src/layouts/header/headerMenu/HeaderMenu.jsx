import './HeaderMenu.scss';

import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from 'utils';

const HeaderMenu = () => {
  return (
    <div className="header__menu">
      <a href="#1" className="header__menu-link">
        Home
      </a>
      <Link to={Routes.projects} className="header__menu-link">
        Projects
      </Link>
      <Link to={Routes.dashboards} className="header__menu-link">
        Dashboards
      </Link>

    </div>
  );
};

export default HeaderMenu;
