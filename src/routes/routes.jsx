import React from 'react';
import {Route, Switch} from "react-router-dom";

import LandingPage from '../containers/landingpage/landingpage';
import Store from '../containers/store/store';
import SingleGame from '../containers/singleGame/singleGame';
import Social from '../containers/social/social';
import Checkout from '../containers/checkout/checkout';
import Register from '../containers/login-Handler/Register';
import Login from '../containers/login-Handler/Login';
import Profile from '../containers/userProfile/Profile'
import PrivateRoute from "./PrivateRoute";

import ForOFour from '../components/404/404';

const Routes = () => {

    const allRoutes = [
        {
            _id: 0,
            exact: true,
            path: '/',
            Component: LandingPage
        }, {
            _id: 1,
            exact: true,
            path: '/store',
            Component: Store
        }, {
            _id: 2,
            exact: false,
            path: '/store/:id',
            Component: SingleGame
        }, {
            _id: 3,
            exact: false,
            path: '/social',
            Component: Social
        }, {
            _id: 4,
            exact: false,
            path: '/checkout',
            Component: Checkout
        }, {
            _id: 5,
            exact: false,
            path: '/register',
            Component: Register
        }, {
            _id: 6,
            exact: false,
            path: '/login',
            Component: Login
        }, {
            _id: 7,
            exact: false,
            path: '*',
            Component: ForOFour
        }
    ]

    const renderRoutes = allRoutes.map(r => {
        return <Route key={r._id} exact={r.exact} path={r.path} render={(props) => <r.Component {...props}/>}/>
    })

    return (<Switch >
        <PrivateRoute exact={true} path="/userProfile" component={Profile}/>
        {renderRoutes}
    </Switch>)
}

export default Routes;
