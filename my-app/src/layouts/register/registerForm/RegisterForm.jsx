
import './RegisterForm.scss';

import {Button} from 'components/button';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {useForm} from 'react-hook-form';
import UserStore from 'store/BoardStore/UserStore';

import {emailReg, nameReg, passwordReg} from './validation';

const RegisterForm = () => {
  const {register, handleSubmit,
    formState: {errors}} = useForm();
  return (
    <form onSubmit={handleSubmit((data)=> {
      UserStore.createUser(data);
    })}>
      <fieldset className='register-form'>
        <legend>Registration form</legend>
        <div className='register-form__title'>
          <h3 >Name</h3>
          <p className='register-form__error'>{errors?.name?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__field'
          {...register('name', nameReg )}></input>

        <div className='register-form__title'>
          <h3 >Email</h3>
          <p className='register-form__error'>{errors?.email?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__field'
          {...register('email', emailReg )}></input>

        <div className='register-form__title'>
          <h3 >Password</h3>
          <p className='register-form__error'>{errors?.password?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__field'
          {...register('password', passwordReg )}></input>

        <Button>Registration</Button>

      </fieldset>
    </form>

  );
};

export default observer(RegisterForm);
