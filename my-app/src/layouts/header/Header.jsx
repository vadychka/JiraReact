import './Header.scss';
import './index';

import {logo} from 'assets';
import {observer} from 'mobx-react-lite';
import React from 'react';
import UsersStore from 'store/BoardStore/UsersStore';

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
      <HeaderMenu />
      <input
        type="text"
        className="header__search"
        placeholder="&#128270;   Search"
      />
      {UsersStore.users ? <HeaderLoginAndRegister /> : <HeaderLogOut/>}
    </div>
  );
};
export default observer(Header);
