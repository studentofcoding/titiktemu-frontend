import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './SidePanel.css';
import '../chat.css';

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
        vertical
        className="chat-sidebar"
        style={{
          background: "#e6e7ee"
        }}
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