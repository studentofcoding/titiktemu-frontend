import React, { Component } from 'react';

import './windows.css';

import DashboardApp from '../AppIcon/dashboard'
import ForumApp from '../AppIcon/forum';
import TimelineApp from '../AppIcon/timeline';

class windows extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toogleTopic: false,
      isClicked: false,
      message: "🔬Filter Hasil"
    };
  }
  // * For Handle Click Filter

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Filter Hasil" : "🎬 Tunjukan Hasil"
    });
  }

  render() {
    return (
      <div id="home">
        <div class="scroll-left">
          <p>1. Lorem Culpa duis exercitation est deserunt mollit deserunt enim non nostrud dolore nisi proident.
          2. Lorem Culpa duis exercitation est deserunt mollit deserunt enim non nostrud dolore nisi proident.
          3. Lorem Culpa duis exercitation est deserunt mollit deserunt enim non nostrud dolore nisi proident.
          </p>
        </div>
        <div>
          <ul>
            <li>
              <DashboardApp/>
            </li>
            <li>
              <ForumApp/>
            </li>
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
