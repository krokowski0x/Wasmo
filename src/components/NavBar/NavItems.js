import React from 'react';
import { Menu, Icon, Button } from 'semantic-ui-react';
import './Navbar.scss';

const NavItems = props => {
  // eslint-disable-next-line react/prop-types
  const { position , toggleMenu, handleLogout } = props;
  
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
        <Menu.Menu position="right">
          <Menu.Item>
            <Button animated onClick={() => handleLogout()}>
              <Button.Content visible>Log out</Button.Content>
              <Button.Content hidden>
                <Icon name="log out" />
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu.Menu>
    </Menu.Menu>
  );
};

export default NavItems;
