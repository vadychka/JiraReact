import {Redirect, Route, Switch} from 'react-router';
import {Routes} from 'utils';

const {default: UserStore} = require('store/UserStore');
import Board from 'layouts/board';
import Projects from 'layouts/projects';


const VerifyUser = ({setPopUpProject, setPopUpActive}) => {
  if (!UserStore.user) {
    return <Redirect to={Routes.login}></Redirect>;
  }
  return (<Switch>
    <Route path={Routes.dashboards}
      render={()=> <Board setActive={setPopUpActive}></Board>}>
    </Route> <Route path={Routes.projects}
      render={()=> <Projects setActive={setPopUpProject}>
      </Projects>}></Route>
  </Switch>
  );
};

export default VerifyUser;
