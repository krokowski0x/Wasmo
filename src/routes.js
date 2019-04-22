import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Auth from "./Auth";
import Login from './components/LoginPage/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Game from './components/Game/Game';
import NavBar from './components/NavBar/NavBar';

class WasmoRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(),
      isUserLoggedIn: true,
    }
  }

  checkIfUserLoggedIn = () => {
    const { auth } = this.state;
    this.setState({
      isUserLoggedIn: auth.isAuthenticated(),
    });
  }

  logout = () => {
    const { auth } = this.state;
    auth.logout();
  }

  render() {
    const { auth } = this.state;

    return (
      <Router history={history}>
        <main>
          <NavBar handleLogout={this.logout} />
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' render={(props) => <Login auth={auth} {...props} />} />
          <Route path="/game/:title" component={Game} />
        </main>
      </Router>
    );
  }
};

export default WasmoRouter;
