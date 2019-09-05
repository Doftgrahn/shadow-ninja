import React from 'react';
import {Route, Switch} from "react-router-dom";

import LandingPage from '../containers/landingpage/landingpage';
import Games from '../containers/games/games';
import Social from '../containers/social/social';
import Checkout from '../containers/checkout/checkout';

const Routes = () => {

    const allRoutes = [
        {
            exact: true,
            path: '/',
            Component: LandingPage
        }, {
            exact: false,
            path: '/games',
            Component: Games
        }, {
            exact: false,
            path: '/social',
            Component: Social
        }, {
            exact: false,
            path: '/checkout',
            Component: Checkout
        }
    ]

    const renderRoutes = allRoutes.map((r, index) => <Route key={index} exact={r.exact} path={r.path} render={(props) => <r.Component {...props}/>}/>)

    return (<Switch>
        {renderRoutes}

    </Switch>)
}

export default Routes;
