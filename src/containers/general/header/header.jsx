import React from 'react';

import {Link} from "react-router-dom";

const Header = () => {

    const navBarData = [
        {
            name: 'Home',
            to: '/'
        }, {
            name: 'Store',
            to: '/store'
        }, {
            name: 'Social',
            to: '/social'
        }, {
            name: 'Checkout',
            to: '/checkout'
        }, {
            name: 'Signup / Login',
            to: '/register'
        }
    ]

    const navBar = navBarData.map((nav, index) => <Link key={index} to={nav.to}>{nav.name}</Link>)

    return (<header>
        <h1>xXShadowNinjaXx</h1>
        <nav> {navBar}</nav>

    </header>)
}

export default Header;
