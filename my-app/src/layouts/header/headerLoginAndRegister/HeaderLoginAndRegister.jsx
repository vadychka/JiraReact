import './HeaderLoginAndRegister.scss';

import {BTN__WHITE} from 'common';
import {Button} from 'components';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from 'utils';


const HeaderLoginAndRegister = () => {
  return (
    <div className="header__navigation">
      <Link to={Routes.register}>
        <Button style={BTN__WHITE}>
        Registration
        </Button>
      </Link>

      <Link to={Routes.login}>
        <Button >
        Log in
        </Button>
      </Link>
    </div>
  );
};

export default observer(HeaderLoginAndRegister);
