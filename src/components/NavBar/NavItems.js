import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './Navbar.scss';

const NavItems = props => {
  const { position , toggleMenu } = props;  
  return (
    <Menu.Menu position={position} onClick={toggleMenu}>
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
