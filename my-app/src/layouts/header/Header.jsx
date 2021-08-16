import './Header.scss';
import './index';

import {logo} from 'assets';
import LogIn from 'layouts/logIn/LogIn';
import {observer} from 'mobx-react-lite';
import React, {useState} from 'react';
import UsersStore from 'store/BoardStore/UserStore';

import HeaderBarBtn from './headerBtnBar/HeaderBarBtn';
import HeaderLoginAndRegister from
  './headerLoginAndRegister/HeaderLoginAndRegister';
import HeaderLogOut from './headerLogOut/HeaderLogOut';
import HeaderMenu from './headerMenu/HeaderMenu';

const Header = ({setIsActive}) => {
  const [showLogin, setActiveLogin] = useState(null);
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
      {!UsersStore.user.length ? <HeaderLoginAndRegister
        activeLogin={setActiveLogin}>
      </HeaderLoginAndRegister> : <HeaderLogOut/>}
      <LogIn showLogin={showLogin}></LogIn>
    </div>
  );
};
export default observer(Header);
