import './LogInForm.scss';
import 'react-toastify/dist/ReactToastify.css';

import {BTN__DEFAULT} from 'common';
import {Button} from 'components';
import {observer} from 'mobx-react-lite';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import UserStore from 'store/BoardStore/UserStore';
import {Routes} from 'utils';

import {nameReg, passwordReg} from './validation';

const LogInForm = () => {
  const {register, handleSubmit,
    formState: {errors}} = useForm();
  const onClick =() => {
    if (UserStore.textError) {
      toast.error(UserStore.textError);
      UserStore.textError = null;
    }
  };

  return (
    <form className='login-form'
      onSubmit={handleSubmit((data) => {
        UserStore.logIn(data);
      })}>
      <h3 className='login-form__main-title'>Log In</h3>
      <div className='login-form__title'>
        <legend>Name</legend>
        <p className='login-form__error'>{errors?.name?.message}</p>
      </div>
      <input type='text'
        className='login-form__field'
        placeholder='write your name'
        {...register('name', nameReg)}>
      </input>

      <div className='login-form__title'>
        <legend>Password</legend>
        <p className='login-form__error'>{errors?.password?.message}</p>
      </div>
      <input type='text'
        className='login-form__field'
        placeholder='write your password'
        {...register('password', passwordReg)}>
      </input>
      <Button style={BTN__DEFAULT} onClickBtn={onClick}>LOG IN</Button>
      <Link to={Routes.register} className='login-form__registration-btn'>
        Registration</Link>
      <ToastContainer />;
    </form>
  );
};

export default observer(LogInForm);
