import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landingpage from './landingpage';
import home from './home';
import about from './about';
import Register from './Auth/Register';
import Login from './Auth/Login';


//This is for setting the Main Function of Routing titiktemu Webapps
const Main = () => (
    <Switch>
        <Route exact path="/" component={home} />
        <Route path="/landing" component={landingpage} />
        <Route path="/about" component={about} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
    </Switch>
)


export default Main;