import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Menu } from 'semantic-ui-react';
import NavItems from './NavItems';
import { slide as Burger } from 'react-burger-menu';
import './Navbar.scss';
import logo from './favicon.ico';

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleMenu = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  };

  render() {
    return (
      <Menu secondary className="navBar">
        <Menu.Item>
          <img src={logo} alt="Logo" />
          <span className="logo">Wasmo</span>
        </Menu.Item>
        <MediaQuery minWidth={768}>
          <NavItems position="right" />
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Burger width={'15%'} right isOpen={this.state.isOpen}>
            <NavItems isOpen={this.isOpen} />
          </Burger>
        </MediaQuery>
      </Menu>
    );
  }
}
