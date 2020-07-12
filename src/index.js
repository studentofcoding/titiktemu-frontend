import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import firebase from './components/firebase';
import landingpage from './components/App/additional/landingPage';
import nothinghere from './components/App/additional/nothingHere';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './components/App/community/chat/reducers';
import { setUser, clearUser } from './components/App/community/chat/actions';
import Spinner from './components/App/additional/loadingSpinner';

import chat from './components/App/community/chat/index';

/*Import Windows and Apps */
import course from './components/App/course';
import home from './components/App/home';

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
            <Route exact path="/landingpage" component={landingpage} />
            <Route exact path="/chat" component={chat} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/course" component={course} />
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
  
