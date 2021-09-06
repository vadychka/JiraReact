import './LogIn.scss';

import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import UserStore from 'store/UserStore';
import { Routes } from 'utils';

import LogInForm from './logInForm/LogInForm';


const LogIn: React.FC = () => {
  const { user } = UserStore;
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push(Routes.projects);
    }
  }, [history, user]);
  return (
    <div className='log-in'>
      <LogInForm></LogInForm>
    </div>
  );
};

export default observer(LogIn);
