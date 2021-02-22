import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import API from './config/API'


import App from './App';

import appLogin from "./sites/appLogin";

const AppRoutes = () => {
    const store = generateStore();
    return (
        <Provider store={store}>
            <Router basename={API.baseName}>
                <App>
                    <Switch >
                        <Route exact path={`/`} component={appLogin}/>
                    </Switch>
                </App>
            </Router>
        </Provider>)
}

export default AppRoutes;
