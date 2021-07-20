import './App.scss';
import 'constants';
import './Appp.scss';

import CreateTask from 'layouts/board/createTask/CreateTask';
import Projects from 'layouts/projects';
import CreateProject from 'layouts/projects/createProject/CreateProject';
import RegisterNewUser from 'layouts/registerNewUser';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Board from './layouts/board';
import Header from './layouts/header/Header';
import SideBar from './layouts/sidebar';

function App() {
  const [popUpActive, setPopUpActive] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [popUpProject, setPopUpProject] = useState(null);
  // const [registerFormActive, setRegisterForm] = useState(null);

  return (
    <Router>
      <div className="app__wrapper">
        <Header setIsActive={() => setIsActive(!isActive)}></Header>
        <div className="main">
          <SideBar isActive={isActive}></SideBar>
          <Switch>
            <Route path='/RegisterNewUser'
              render={()=> <RegisterNewUser></RegisterNewUser>}></Route>
            <Route path='/content'
              render={()=> <Board setActive={setPopUpActive}></Board>}>
            </Route>
            <Route path='/projects'
              render={()=> <Projects setActive={setPopUpProject}>
              </Projects>}></Route>

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
