
import './RegisterForm.scss';

import {BTN__DEFAULT} from 'common';
import {Button} from 'components/button';
import React from 'react';
import {useForm} from 'react-hook-form';
import {BoardStore} from 'store/BoardStore';

const RegisterForm = () => {
  const {register, handleSubmit,
    formState: {errors}} = useForm();
  return (
    <form onSubmit={handleSubmit((data)=> {
      BoardStore.setNewUser(data);
    })}>
      <fieldset className='register-form'>
        <legend>Registration form</legend>
        <h3 className='register-form__title'>Name</h3>
        <input type="text" placeholder='write here'
          className='register-form__inp'
          {...register('name' )}></input>

        <h3 className='register-form__title'>Email</h3>
        <input type="text" placeholder='write here'
          className='register-form__inp'
          {...register('email' )}></input>

        <h3 className='register-form__title'>Password</h3>
        <input type="text" placeholder='write here'
          className='register-form__inp'
          {...register('password' )}></input>

        <Button style={BTN__DEFAULT}>Registration</Button>
      </fieldset>
    </form>

  );
};

export default RegisterForm;
