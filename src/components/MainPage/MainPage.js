import React, { Component } from 'react';
import Auth from "../Auth/Auth";
import history from '../../history';
import NavBar from '../NavBar/NavBar';
import './MainPage.scss';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      auth: new Auth(),
      isUserLoggedIn: false
    };
    const { state } = this.state;
    this.state.isUserLoggedIn = state.auth.isAuthenticated();
  }

  componentDidMount() {
    const { isUserLoggedIn } = this.state;
    if(!isUserLoggedIn) {
      history.push("/login");
    }
  }

  checkIfUserLoggedIn = () => {
    const { auth } = this.state;
    const isLogged = auth.isAuthenticated();
    this.setState({
      isUserLoggedIn: isLogged
    });
  }

  logout = () => {
    const { auth } = this.state;
    auth.logout();
  }

  render() {
    return (
      <div className="MainPage">
        <div>
          <NavBar />
        </div>
        <header className="MainPage-header">
          <h1>Welcome to Wasmo!</h1>
          <button type="button" onClick={this.logout}> Get me out of here!</button>
        </header>
      </div>
    );
  }
}
