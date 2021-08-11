import './App.scss';
import 'constants';
import './Appp.scss';

import CreateTask from 'layouts/board/createTask/CreateTask';
import LogIn from 'layouts/logIn/LogIn';
import Projects from 'layouts/projects';
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

import Board from './layouts/board';
import Header from './layouts/header/Header';
import SideBar from './layouts/sidebar';

function App() {
  const [popUpActive, setPopUpActive] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [popUpProject, setPopUpProject] = useState(null);


  return (
    <Router>
      <div className="app__wrapper">
        <Header setIsActive={() => setIsActive(!isActive)}></Header>
        <div className="main">
          <SideBar isActive={isActive}></SideBar>
          <Switch>

            <Route path={Routes.login}
              render={()=><LogIn></LogIn>}></Route>
            <Route path={Routes.register}
              render={()=> <Register></Register>}></Route>
            <Route path={Routes.dashboards}
              render={()=> <Board setActive={setPopUpActive}></Board>}>
            </Route>
            <Route path={Routes.projects}
              render={()=> <Projects setActive={setPopUpProject}>
              </Projects>}></Route>
            <Redirect path={Routes.register}></Redirect>

          </Switch>

        </div>

        <CreateTask active={popUpActive}
          setActive={setPopUpActive}></CreateTask>
        <CreateProject active={popUpProject}
          setActive={setPopUpProject}></CreateProject>

      </div>
    </Router>
  );
}

export default App;
