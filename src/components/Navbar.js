import React, { Component } from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';
import firebase from './firebase';

import Typeform from './typeform/typeform';

class Navbar extends Component {

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('Sign Out!'));
  }

  render() {
    return (
      <header className="navbar">
        <div className="logo-container">
          <NavLink exact to="/">
            <img
              className="app-logo"
              src="Images/logo.png"
              alt="titiktemu"
            />
          </NavLink>
        </div>
        {/*This is the function to Show the Menu Page*/}
        <div className="menu-navbar">
          <Typeform />
          <a href="/">
            <NavLink activeClassName="active-navlink-home" exact to="/">Home</NavLink>
          </a>
          {/* <a href="/event">
            <NavLink activeClassName="active-navlink-event" exact to="/event">Event</NavLink>
          </a> */}
          <a href="/chat">
            <NavLink activeClassName="active-navlink-chat" exact to="/chat">Chat</NavLink>
          </a>
          <div className="signout">
          <NavLink onClick={this.handleSignout}>
            <img
              src = "https://img.icons8.com/windows/30/000000/shutdown.png"
              alt="logout"
              className="signout-btn"
            />
          </NavLink>
        </div>
        </div>
      </header>
    );
  }
}

export default Navbar;