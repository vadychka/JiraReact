import { Redirect, Route, Switch } from 'react-router';
import { Routes } from 'utils';
import Board from 'layouts/board';
import Projects from 'layouts/projects';
import { FC } from 'react';

const { default: UserStore } = require('store/UserStore');

interface IVerifyUserProps {
  setPopUpProject: boolean;
  setPopUpActive: string;
}


const VerifyUser: FC<IVerifyUserProps> = ({ setPopUpProject, setPopUpActive }) => {
  if (!UserStore.user) {
    return <Redirect to={Routes.login}></Redirect>;
  }
  return (<Switch>
    <Route path={Routes.dashboards}
      render={() => <Board setActive={setPopUpActive}></Board>}>
    </Route> <Route path={Routes.projects}
      render={() => <Projects setActive={setPopUpProject} />}></Route>
  </Switch>
  );
};

export default VerifyUser;
