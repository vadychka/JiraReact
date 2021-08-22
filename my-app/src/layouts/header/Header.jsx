import './Header.scss';
import './index';

import {logo} from 'assets';
import {TEXT_HEADER} from 'common/constants';
import {observer} from 'mobx-react-lite';
import React from 'react';
import UserStore from 'store/UserStore';

import HeaderBarBtn from './headerBtnBar/HeaderBarBtn';
import HeaderLoginAndRegister from
  './headerLoginAndRegister/HeaderLoginAndRegister';
import HeaderLogOut from './headerLogOut/HeaderLogOut';
import HeaderMenu from './headerMenu/HeaderMenu';

const Header = ({setIsActive}) => {
  return (
    <div className="header">
      <HeaderBarBtn onClick={setIsActive}></HeaderBarBtn>
      <img src={logo} alt="img" className="header__logo" />
      {!UserStore.user ? TEXT_HEADER : <HeaderMenu /> }
      <input
        type="text"
        className="header__search"
        placeholder="&#128270;   Search"
      />
      {!UserStore.user ? <HeaderLoginAndRegister/> : <HeaderLogOut/> }

    </div>
  );
};
export default observer(Header);
