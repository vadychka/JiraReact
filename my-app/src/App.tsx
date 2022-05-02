import './App.scss';
import 'constants';
import './Appp.scss'; 
 
import ToasterHandler from 'components/toasts/ToasterHandler';
import VerifyUser from 'components/verifyUser/VerifyUser';
import CreateTask from 'layouts/board/createTask/CreateTask';
import LogIn from 'layouts/logIn/LogIn';
import CreateProject from 'layouts/projects/createProject/CreateProject';
import Register from 'layouts/register';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Routes } from 'utils';

import Header from './layouts/header/Header';
import SideBar from './layouts/sidebar';
import { Suspense } from 'react';

function App() {
  const [popUpActive, setPopUpActive] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [popUpProject, setPopUpProject] = useState('');

  return (
    <Suspense fallback="loading">
      <Router>
        <div className="app__wrapper" >
          <Header setIsActive={() => setIsActive(!isActive)} />
          < div className="main" >
            <SideBar isActive={isActive} />
            < Switch >

              <Route path={Routes.login}
                render={() => <LogIn />} />
              <Route path={Routes.register}
                render={() => <Register />} />
              <VerifyUser setPopUpProject={setPopUpProject} setPopUpActive={setPopUpActive} />

            </Switch>

          </div>

          <CreateTask active={popUpActive}
            setActive={setPopUpActive} />
          <CreateProject active={popUpProject}
            setActive={setPopUpProject} />

        </div>
        < ToasterHandler />
      </Router>
    </Suspense>
  );
}

export default App;
