import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './SidePanel.css';
import UserPanel from './UserPanel';
import Channels from './Channels';
import DirectMessages from './DirectMessages';
import Favorite from './Favorite';

class SidePanel extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style = {
          {
            background: '#276366',
            fontSize: '1.1rem',
          }
        }
      >
        <UserPanel currentUser={currentUser} />
        <Favorite currentUser={currentUser} />
        <Channels currentUser={currentUser} />
        <DirectMessages currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;