import React from 'react';
import {Route, Switch } from 'react-router-dom';
//import { BrowserRouter as Router, Route } from 'react-router-dom'
/*import { syncHistoryWithStore } from 'react-router-redux';*/

// ---
import App from './App';

// import API from './config/API';
import appLogin from "./sites/appLogin";
// const baseurl = API.basename;
const AppRoutes = () =>

    <Route>
        <App>
            <Switch>
                <Route exact path={`/`} component={appLogin}/>
            </Switch>
        </App>
    </Route>;

export default AppRoutes;
