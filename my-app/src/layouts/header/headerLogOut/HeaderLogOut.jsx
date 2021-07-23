import './HeaderLogOut.scss';

import {BTN__DEFAULT} from 'common';
import {Button} from 'components';

const HeaderLogOut = () => {
  return (
    <div className='header-log-out'>
      <Button style={BTN__DEFAULT}>Log out</Button>
    </div>
  );
};

export default HeaderLogOut;
