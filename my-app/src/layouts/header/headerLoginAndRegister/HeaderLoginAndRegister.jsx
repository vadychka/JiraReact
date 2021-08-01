import './HeaderLoginAndRegister.scss';

import {BTN__DEFAULT, BTN__WHITE} from 'common';
import {Button} from 'components';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from 'utils';


const HeaderLoginAndRegister = ({activeLogin}) => {
  return (
    <div className="header__navigation">
      <Link to={Routes.register}>
        <Button style={BTN__WHITE}>
        Registration
        </Button>
      </Link>

      <Button style={BTN__DEFAULT} onClickBtn={()=>activeLogin(111)}>
        Log in
      </Button>
    </div>
  );
};

export default observer(HeaderLoginAndRegister);
