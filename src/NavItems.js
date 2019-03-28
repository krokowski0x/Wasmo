import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './Navbar.scss';

const NavItems = props => {
  return (
    <Menu.Menu position={props.position} onClick={props.toggleMenu}>
      <Menu.Item as="a">
        <Icon size="large" name="user" />
      </Menu.Item>
      <Menu.Item as="a">
        <Icon size="large" name="add" />
      </Menu.Item>
      <Menu.Item as="a">
        <Icon size="large" name="setting" />
      </Menu.Item>
    </Menu.Menu>
  );
};

export default NavItems;
