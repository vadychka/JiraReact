import './Register.scss';

import {observer} from 'mobx-react-lite';

import RegisterForm from './registerForm/RegisterForm';

const Register = () => {
  return (
    <div className='register'>
      <RegisterForm></RegisterForm>
    </div>
  );
};

export default observer(Register);
