import React, { Component } from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';
import firebase from './firebase';

class Navbarmobile extends Component {

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('Sign Out!'));
  }

  render() {
    return (
      <footer className="navbar-mobile">
        {/*This is the function to Show the Menu Page*/}
        <div className="menu-mobile">
          <a href="/">
            <NavLink activeClassName="active-navlink-home" exact to="/">Home</NavLink>
          </a>
          <a href="/chat">
            <NavLink activeClassName="active-navlink-chat" exact to="/chat">Chat</NavLink>
          </a>
        </div>
      </footer>
    );
  }
}

export default Navbarmobile;