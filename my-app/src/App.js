import './App.scss';
import 'constants';
import './Appp.scss';

import ToasterHandler from 'components/toasts/ToasterHandler';
import VerifyUser from 'components/verifyUser/VerifyUser';
import CreateTask from 'layouts/board/createTask/CreateTask';
import LogIn from 'layouts/logIn/LogIn';
import CreateProject from 'layouts/projects/createProject/CreateProject';
import Register from 'layouts/register';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {Routes} from 'utils';

import Header from './layouts/header/Header';
import SideBar from './layouts/sidebar';

function App() {
  const [popUpActive, setPopUpActive] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [popUpProject, setPopUpProject] = useState(false);

  return (
    <Router>
      <div className="app__wrapper">
        <Header setIsActive={() => setIsActive(!isActive)}/>
        <div className="main">
          <SideBar isActive={isActive}></SideBar>
          <Switch>

            <Route path={Routes.login}
              render={()=><LogIn></LogIn>}></Route>
            <Route path={Routes.register}
              render={()=> <Register></Register>}></Route>
            <VerifyUser setActive={setPopUpProject} setActive={setPopUpActive}
            ></VerifyUser>
            <Redirect to={Routes.register}></Redirect>

          </Switch>

        </div>

        <CreateTask active={popUpActive}
          setActive={setPopUpActive}></CreateTask>
        <CreateProject active={popUpProject}
          setActive={setPopUpProject}></CreateProject>

      </div>
      <ToasterHandler/>
    </Router>
  );
}

export default App;
