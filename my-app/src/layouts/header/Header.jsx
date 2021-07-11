import './Header.scss';
import './index';

import {logo} from 'assets';
import {Button} from 'components';
import {useState} from 'react';
import React from 'react';

import HeaderBarBtn from './headerBtnBar/HeaderBarBtn';
import HeaderMenu from './headerMenu/HeaderMenu';
import HeaderNavigation from './headerNavigation/HeaderNavigation';

const Header = ({setIsActive}) => {
  const [number, setA] = useState(0);
  const onClickBtn = () => {
    setA(number + 1);
    console.log(number);
  };

  return (
    <div className="header">
      <HeaderBarBtn onClick={setIsActive}></HeaderBarBtn>
      <img src={logo} alt="img" className="header__logo" />
      <HeaderMenu />
      <Button onClickBtn={onClickBtn}>{number}</Button>
      <input
        type="text"
        className="header__search"
        placeholder="&#128270;   Search"
      />
      <HeaderNavigation />
    </div>
  );
};
export default Header;
