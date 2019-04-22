import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react';
import NavItems from './NavItems';
import './Navbar.scss';
import logo from '../../favicon.ico';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <Menu secondary className="navBar">
        <Link to='/'>
          <Menu.Item>
            <img src={logo} alt="Logo" />
            <span className="logo">Wasmo</span>
          </Menu.Item>
        </Link>
        {window.location.pathname !== '/login' ? (
          <NavItems position="right" handleLogout={this.props.handleLogout} />
        ) : (
          <div />
        )}
      </Menu>
    );
  }
}
