import './HeaderLoginAndRegister.scss';

import {BTN__DEFAULT, BTN__WHITE} from 'common';
import {Button} from 'components';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {Link} from 'react-router-dom';
import {BoardStore} from 'store/BoardStore';


const HeaderLoginAndRegister = () => {
  return (
    <div className="header__navigation">
      <Link to={BoardStore.Routs.RegisterNewUser}>
        <Button style={BTN__WHITE}>
        Registration
        </Button>
      </Link>

      <Button style={BTN__DEFAULT}>
        <Link to={BoardStore.Routs.RegisterNewUser}>
        Log in
        </Link></Button>
    </div>
  );
};

export default observer(HeaderLoginAndRegister);
