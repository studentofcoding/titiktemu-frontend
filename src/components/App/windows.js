import React, { Component } from 'react';

import './windows.css';

import DashboardApp from '../AppIcon/dashboard'
import ForumApp from '../AppIcon/forum';
import TimelineApp from '../AppIcon/timeline';

import { NavLink } from 'react-router-dom';

class windows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toogleTopic: false,
      menuPressedState: false,
    };
  }

  handleMenuPressed() {
    this.setState({
      menuPressedState: !this.state.menuPressedState
    })
  }

  render() {
    return (
      <div id="home">
        <div className="scroll-left">
          <p>1. Lorem Culpa duis exercitation est deserunt mollit deserunt enim non nostrud dolore nisi proident. 2. Lorem Culpa duis exercitation est deserunt mollit deserunt enim non nostrud dolore nisi proident.
          </p>
        </div>
        <div>
          <ul>
            <NavLink exact to="/">
              <li>
                <DashboardApp/>
              </li>
            </NavLink>
            <NavLink exact to="/chat">
              <li>
                <ForumApp/>
              </li>
            </NavLink>
            <li>
              <TimelineApp/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default windows;
