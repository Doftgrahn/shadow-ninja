import React from 'react';
import {Route, Switch} from "react-router-dom";

import LandingPage from '../components/landingpage/landingpage';
import Games from '../components/games/games';
import Social from '../components/social/social';
import Checkout from '../components/checkout/checkout';

const Routes = () => {

    const allRoutes = [
        {
            exact: true,
            path: '/',
            component: LandingPage
        }, {
            exact: false,
            path: '/games',
            component: Games
        }, {
            exact: false,
            path: '/social',
            component: Social
        }, {
            exact: false,
            path: '/checkout',
            component: Checkout
        }
    ]

    const renderRoutes = allRoutes.map((r, index) => <Route key={index} exact={r.exact} path={r.path} render={(props) => <r.component {...props}/>}/>)

    return (<Switch>
        {renderRoutes}

    </Switch>)
}

export default Routes;
