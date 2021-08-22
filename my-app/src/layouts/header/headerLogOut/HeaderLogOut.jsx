import './HeaderLogOut.scss';

import {Button} from 'components';
import {useHistory} from 'react-router';
import UserStore from 'store/UserStore';
import {Routes} from 'utils';

const HeaderLogOut = () => {
  const history = useHistory();
  const logOut = () => {
    UserStore.logOut();
    history.push(Routes.login);
  };
  return (
    <div className='header-log-out'>
      <Button onClickBtn={logOut}>Log out</Button>
    </div>
  );
};

export default HeaderLogOut;
