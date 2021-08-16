import './HeaderLogOut.scss';

import {Button} from 'components';
import UserStore from 'store/BoardStore/UserStore';

const HeaderLogOut = () => {
  return (
    <div className='header-log-out'>
      <Button onClickBtn={()=> UserStore.logOut()}>Log out</Button>
    </div>
  );
};

export default HeaderLogOut;
