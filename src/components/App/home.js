import React, { Component } from 'react';

import '../../index.css';
import './home.css';

// import DashboardApp from './dashboard'
// import ForumApp from './community/chat/index';
// import TimelineApp from './leaderboard';

// import { NavLink } from 'react-router-dom';
import Navigation from './navigation';

class home extends Component {
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
        <Navigation />
      </div>
    );
  }
}

export default home;
