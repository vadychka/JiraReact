import './Header.scss';
import './index';

import {logo} from 'assets';
import React from 'react';

import HeaderBarBtn from './headerBtnBar/HeaderBarBtn';
import HeaderLoginAndRegister from
  './headerLoginAndRegister/HeaderLoginAndRegister';
import HeaderMenu from './headerMenu/HeaderMenu';

const Header = ({setIsActive}) => {
  return (
    <div className="header">
      <HeaderBarBtn onClick={setIsActive}></HeaderBarBtn>
      <img src={logo} alt="img" className="header__logo" />
      <HeaderMenu />
      <input
        type="text"
        className="header__search"
        placeholder="&#128270;   Search"
      />
      <HeaderLoginAndRegister />
    </div>
  );
};
export default Header;
