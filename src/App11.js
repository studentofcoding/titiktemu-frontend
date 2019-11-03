import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import firebase from './components/firebase';
import home from './components/home';
import landingpage from './components/landingpage';
import event from './components/event';
import nothinghere from './components/nothinghere';
import chat from './components/chat';
import paper from './components/App/paper';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends Component {

  render() {
    return (
        <div>
          {/*This is the function to Route to Page (via switch)*/}
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/landingpage" component={landingpage} />
            <Route exact path="/event" component={event} />
            <Route exact path="/chat" component={chat} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home/course" component={course} />
            <Route exact path="/home/paper" component={paper} />
            <Route component={nothinghere} />
          </Switch>
        </div>
    );
  }
}

export default App;
