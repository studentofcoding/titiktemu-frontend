import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import firebase from './components/firebase';
import home from './components/Home';
import landingpage from './components/landingpage';
import event from './components/event';
import nothinghere from './components/nothinghere';
import chat from './components/chat';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setUser, clearUser } from './actions';
import Spinner from './loadingspinner';

/*Import Windows and Apps */
import paper from './components/paper';
import course from './components/App/course';
import windows from './components/App/windows';
import Mongo from './components/mongo';

const store = createStore(rootReducer, composeWithDevTools());

class Root extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/");
      } else {
        this.props.clearUser();
        this.props.history.push("/landingpage");
      }
    });
  }

  render() {
    return this.props.isLoading ? <Spinner /> : (
        <div>
          {/*This is the function to Route to Page (via switch)*/}
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/mongo" component={Mongo}/>
            <Route exact path="/landingpage" component={landingpage} />
            <Route exact path="/event" component={event} />
            <Route exact path="/chat" component={chat} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/course" component={course} />
            <Route exact path="/paper" component={paper} />
            <Route exact path="/windows" component={windows} />
            <Route component={nothinghere} />
          </Switch>
        </div>
    );
  }
}

const mapStateFromProps = state => ({
  isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(
  connect(
    mapStateFromProps,
    { setUser, clearUser }
  )(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      < RootWithAuth />
    </Router>
  </Provider>,
    document.getElementById('root')
  );
  serviceWorker.unregister();
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  
