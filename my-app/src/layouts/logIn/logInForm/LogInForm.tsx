import './LogInForm.scss';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from 'components';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import UserStore from 'store/UserStore';
import { Routes } from 'utils';

import { nameReg, passwordReg } from './validation';
import { IUser } from 'utils/interfaces';
import { useTranslation } from 'react-i18next';

const LogInForm = () => {
  const {t} = useTranslation()
  const { register, handleSubmit,
    formState: { errors } } = useForm();

  return (
    <form className='login-form'
      onSubmit={handleSubmit((data: IUser) => {
        UserStore.logIn(data);
      })}>
      <h3 className='login-form__main-title'>{t('log_in.title')}</h3>
      <div className='login-form__title'>
        <legend>{t('log_in.name')}</legend>
        <p className='login-form__error'>{errors?.name?.message}</p>
      </div>
      <input type='text'
        className='login-form__field'
        placeholder='write your name'
        {...register('name', nameReg)}>
      </input>

      <div className='login-form__title'>
        <legend>{t('log_in.password')}</legend>
        <p className='login-form__error'>{errors?.password?.message}</p>
      </div>
      <input type='password'
        className='login-form__field'
        placeholder='write your password'
        {...register('password', passwordReg)}>
      </input>
      <Button >{t('log_in.button_log_in')}</Button>
      <Link to={Routes.register} className='login-form__registration-btn'>
        {t('log_in.button_registration')}</Link>
    </form>

  );
};

export default observer(LogInForm);
