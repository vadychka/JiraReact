import './LogInForm.scss';

import {BTN__DEFAULT} from 'common';
import {Button} from 'components';
import {observer} from 'mobx-react-lite';
import {useForm} from 'react-hook-form';
import UserStore from 'store/BoardStore/UserStore';

import {nameReg, passwordReg} from './validation';

const LogInForm = () => {
  const {register, handleSubmit,
    formState: {errors}} = useForm();
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
        className='login-form__inp'
        placeholder='write your name'
        {...register('name', nameReg)}>
      </input>

      <div className='login-form__title'>
        <legend>Password</legend>
        <p className='login-form__error'>{errors?.password?.message}</p>
      </div>
      <input type='text'
        className='login-form__inp'
        placeholder='write your password'
        {...register('password', passwordReg)}>
      </input>
      <Button style={BTN__DEFAULT}>LOG IN</Button>
      <p className='login-form__answer-server'>{UserStore.textUnderForm}</p>
    </form>
  );
};

export default observer(LogInForm);
