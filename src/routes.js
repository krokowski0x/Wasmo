import React, { PureComponent } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Login from './components/LoginPage/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Game from './components/Game';
import NavBar from './components/NavBar/NavBar';

class WasmoRouter extends PureComponent {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Router history={history}>
        <main>
          <NavBar />
          <Route path='/login' component={Login} />
          <Route exact path='/' component={Dashboard} />
          <Route path="/game/:title" component={Game} />
        </main>
      </Router>
    );
  }
};

export default WasmoRouter;
