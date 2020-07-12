import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { setCurrentChannel, setPrivateChannel } from '../actions';
import { Menu, Icon } from 'semantic-ui-react';

class Favorite extends Component {
  state = {
    user: this.props.currentUser,
    usersRef: firebase.database().ref('users'),
    activeChannel: '',
    favChannels: []
  };

  componentDidMount() {
    if (this.state.user) {
      this.addListeners(this.state.user.uid);
    }
  }

  addListeners = userId => {
    this.state.usersRef
      .child(userId)
      .child('favorite')
      .on('child_added', snap => {
        const favChannel = {
          id: snap.key, ...snap.val()
        };
        this.setState({
          favChannels: [...this.state.favChannels, favChannel]
        });
      });
    
    this.state.usersRef
      .child(userId)
      .child('favorite')
      .on('child_removed', snap => {
        const channelToRemove = { id: snap.key, ...snap.val() };
        const filteredChannels = this.state.favChannels.filter(channel => {
          return channel.id !== channelToRemove.id;
        });
        this.setState({ favChannels: filteredChannels });
      });
  };

  setActiveChannel = channel => {
    this.setState({ activeChannel: channel.id });
  };

  changeChannel = channel => {
    this.setActiveChannel(channel);
    this.props.setCurrentChannel(channel);
    this.props.setPrivateChannel(false);
  };

  displayChannels = favChannels =>
  favChannels.length > 0 &&
  favChannels.map(channel => (
    <Menu.Item
      key={channel.id}
      onClick={() => this.changeChannel(channel)}
      name={channel.name}
      style={{ opacity: 1 }}
      active={channel.id === this.state.activeChannel}
    >
      # {channel.name}
    </Menu.Item>
  ));

  render() {
    const { favChannels } = this.state;

    return (
      <>
        <Menu.Item style={{ opacity: 1, fontStyle: 'bold' }}>
          <span>
            FAVORITE
          </span>{" "}
          ({favChannels.length}) <Icon name="add circle" onClick={this.openModal}/>
        </Menu.Item>
        <Menu.Menu style={{ paddingBottom: '2em', marginBottom: "20"}}>
          {this.displayChannels(favChannels)}
        </Menu.Menu>
      </>
    )
  }
}

export default connect(null, { setCurrentChannel, setPrivateChannel })(Favorite);