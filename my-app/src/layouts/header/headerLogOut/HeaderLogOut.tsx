import './HeaderLogOut.scss';

import { Button } from 'components';
import { useHistory } from 'react-router';
import UserStore from 'store/UserStore';
import { Routes } from 'utils';
import { useTranslation } from 'react-i18next';

const HeaderLogOut = () => {
  const { t } = useTranslation()
  const history = useHistory();
  const logOut = () => {
    UserStore.logOut();
    history.push(Routes.login);
  };
  return (
    <div className='header-log-out'>
      <Button onClickBtn={logOut}>{t('header.logout')}</Button>
    </div>
  );
};

export default HeaderLogOut;
