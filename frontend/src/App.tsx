import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import Excelsium from './pages/Excelsium'
import WorkspacesPage from './pages/Workspaces';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/workspaces" component={WorkspacesPage} />
        <Route path="/app" component={Excelsium} />
      </Switch>
    </Router>
  );
}

export default App;
