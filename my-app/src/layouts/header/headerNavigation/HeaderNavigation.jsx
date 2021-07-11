import './HeaderNavigation.scss';

import React from 'react';

const HeaderNavigation = () => {
  return (
    <div className="header__navigation">
      <a href="#1" className="header__navigation-btn">
        {' '}
        &#128276;
      </a>
      <a href="#2" className="header__navigation-btn">
        {' '}
        &#10067;
      </a>
      <a href="#3" className="header__navigation-btn">
        &#128736;
      </a>
      <a href="#4" className="header__navigation-btn">
        {' '}
        &#128521;
      </a>
    </div>
  );
};

export default HeaderNavigation;
