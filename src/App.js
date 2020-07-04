import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import firebase from './components/firebase';
// import home from './components/home';
import windows from './components/App/windows';
import landingpage from './components/landingpage';
import event from './components/event';
import nothinghere from './components/nothinghere';
import chat from './components/chat';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/');
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          {/*This is the function to Route to Page (via switch)*/}
          <Switch>
            <Route exact path="/" component={LoginContainers}/>
            <Route exact path="/" component={windows} />
            <Route exact path="/landingpage" component={landingpage} />
            <Route exact path="/event" component={event} />
            <Route exact path="/chat" component={chat} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={nothinghere} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const AppWithAuth = withRouter(App);

export default App;
