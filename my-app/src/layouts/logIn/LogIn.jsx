import './LogIn.scss';

import LogInForm from './logInForm/LogInForm';


const LogIn = ({showLogin}) => {
  return (
    <div className={showLogin? 'log-in' : 'log-in__active'}>
      <LogInForm></LogInForm>
    </div>
  );
};

export default LogIn;
