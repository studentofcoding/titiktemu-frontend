import React, { Component } from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleMenuClink = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state

    return (
      <div className="navbar">
        <Menu secondary stackable> 
          <Menu.Item>
            <img
              className="app-logo"
              src="Images/Logogram.png"
              alt="titiktumbuh"
            />
            <NavLink to="/home"/>
          </Menu.Item>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleMenuClink}
          >
            <NavLink to="/home">Home</NavLink>
          </Menu.Item >
          <Menu.Item
            name='event'
            active={activeItem === 'event'}
            onClick={this.handleMenuClink}
          >
            <NavLink to="/event">Event</NavLink>
          </Menu.Item >
          <Menu.Item
            name='chat'
            active={activeItem === 'chat'}
            onClick={this.handleMenuClink}
          >
            <NavLink to="/chat">Chat</NavLink>
          </Menu.Item >
        </Menu>
      </div>
    );
  }
}

export default Navbar;