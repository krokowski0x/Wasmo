import React, { PureComponent } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './history';
import MainPage from './components/MainPage/MainPage';
import Login from './components/LoginPage/Login';

class WasmoRouter extends PureComponent {

  constructor(props) {
    super(props);
    this.props = props;
}

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/main' component={MainPage} />
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Login} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    );
  }
};

export default WasmoRouter;
