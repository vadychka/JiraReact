import './RegisterNewUser.scss';

import {observer} from 'mobx-react-lite';

import RegisterForm from './registerForm/RegisterForm';

const RegisterNewUser = () => {
  return (
    <div className='registerNewUser'>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default observer(RegisterNewUser);
