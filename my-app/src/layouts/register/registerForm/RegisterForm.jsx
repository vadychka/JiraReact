
import './RegisterForm.scss';

import {BTN__DEFAULT} from 'common';
import {Button} from 'components/button';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {useForm} from 'react-hook-form';
import UsersStore from 'store/BoardStore/UsersStore';

import {emailReg, nameReg, passwordReg} from './validation';

const RegisterForm = () => {
  const {register, handleSubmit,
    formState: {errors}} = useForm();
  return (
    <form onSubmit={handleSubmit((data)=> {
      UsersStore.createUser(data);
    })}>
      <fieldset className='register-form'>
        <legend>Registration form</legend>
        <div className='register-form__title'>
          <h3 >Name</h3>
          <p className='register-form__error'>{errors?.name?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__inp'
          {...register('name', nameReg )}></input>

        <div className='register-form__title'>
          <h3 >Email</h3>
          <p className='register-form__error'>{errors?.email?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__inp'
          {...register('email', emailReg )}></input>

        <div className='register-form__title'>
          <h3 >Password</h3>
          <p className='register-form__error'>{errors?.password?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__inp'
          {...register('password', passwordReg )}></input>

        <Button style={BTN__DEFAULT}>Registration</Button>
      </fieldset>
    </form>

  );
};

export default observer(RegisterForm);
