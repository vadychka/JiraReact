import { Redirect, Route, Switch } from 'react-router';
import { Routes } from 'utils';
import Board from 'layouts/board';
import Projects from 'layouts/projects';
import { FC } from 'react';

import UserStore from 'store/UserStore'
import { observer } from 'mobx-react-lite';

interface IVerifyUserProps {
  setPopUpProject: (val: string | null) => void
  setPopUpActive: (val: string | null) => void
}


const VerifyUser: FC<IVerifyUserProps> = ({ setPopUpProject, setPopUpActive }) => {
  if (UserStore.isFetching) {
    return <p>loading</p>
  }
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

export default observer(VerifyUser);
