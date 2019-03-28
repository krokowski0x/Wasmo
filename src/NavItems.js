import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import './Navbar.scss';

const NavItems = props => {
  return (
    <Menu.Menu
      className="items"
      id="items"
      position={props.position}
      onClick={props.toggleMenu}
    >
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

// const NavBarMobile = ({ onPusherClick, onToggle, visible }) => (
//   <Sidebar.Pushable as={Segment}>
//     <Sidebar
//       as={Menu}
//       animation="overlay"
//       direction="right"
//       Icon="labeled"
//       inverted
//       vertical
//       inline
//       visible={visible}
//       width="thin"
//     >
//       <Menu.Item as="a">
//         <Icon disabled name="user" /> User
//       </Menu.Item>
//       <Menu.Item as="a">
//         <Icon disabled name="add" /> Add
//       </Menu.Item>
//       <Menu.Item as="a">
//         <Icon disabled name="setting" /> Settings
//       </Menu.Item>
//     </Sidebar>

//     <Sidebar.Pusher
//       dimmed={visible}
//       onClick={onPusherClick}
//       style={{ minHeight: '100vh' }}
//     >
//       <Menu fixed="top" inverted segment>
//         <Menu.Item as="a">
//           <img src="#" alt="Logo" />
//         </Menu.Item>
//         <Menu.Menu position="right">
//           <Menu.Item onClick={onToggle}>
//             <Icon name="sidebar" />
//           </Menu.Item>
//         </Menu.Menu>
//       </Menu>
//     </Sidebar.Pusher>
//   </Sidebar.Pushable>
// );

// const NavBarDesktop = () => (
//   <Menu fixed="top" inverted segment>
//     <Menu.Item as="a">
//       <img src="#" alt="Logo" />
//     </Menu.Item>
//     <Menu.Menu position="right">
//       <Menu.Item as="a">
//         <Icon disabled name="user" />
//       </Menu.Item>
//       <Menu.Item as="a">
//         <Icon disabled name="add" />
//       </Menu.Item>
//       <Menu.Item as="a">
//         <Icon disabled name="setting" />
//       </Menu.Item>
//     </Menu.Menu>
//   </Menu>
// );

// export default class Navbar extends Component {
//   state = { visible: false };

//   handlePusher = () => {
//     const { visible } = this.state;

//     if (visible) this.setState({ visible: false });
//   };

//   handleToggle = () => this.setState({ visible: !this.state.visible });

//   render() {
//     return (
//       <div>
//         <Responsive {...Responsive.onlyMobile}>
//           <NavBarMobile
//             onPusherClick={this.handlePusher}
//             onToggle={this.handleToggle}
//             visible={this.state.visible}
//           />
//         </Responsive>
//         <Responsive minWidth={Responsive.onlyTablet.minWidth}>
//           <NavBarDesktop />
//         </Responsive>
//       </div>
//     );
//   }
// }
