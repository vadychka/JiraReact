
import './RegisterForm.scss';

import { Button } from 'components/button';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useForm } from 'react-hook-form';
import UserStore from 'store/UserStore';

import { emailReg, nameReg, passwordReg } from './validation';
import { INewUser } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { Routes } from 'utils';

const RegisterForm = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { register, handleSubmit,
    formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit((data: INewUser) => {
      UserStore.createUser(data);
      history.push(Routes.login)
    })}>
      <fieldset className='register-form'>
        <legend>{t('registration.title')}</legend>
        <div className='register-form__title'>
          <h3 >{t('registration.name')}</h3>
          <p className='register-form__error'>{errors?.name?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__field'
          {...register('name', nameReg)}></input>

        <div className='register-form__title'>
          <h3 >{t('registration.email')}</h3>
          <p className='register-form__error'>{errors?.email?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__field'
          {...register('email', emailReg)}></input>

        <div className='register-form__title'>
          <h3 >{t('registration.password')}</h3>
          <p className='register-form__error'>{errors?.password?.message}</p>
        </div>
        <input type="text" placeholder='write here'
          className='register-form__field'
          {...register('password', passwordReg)}></input>

        <Button>{t('registration.button_registration')}</Button>

      </fieldset>
    </form>

  );
};

export default observer(RegisterForm);
