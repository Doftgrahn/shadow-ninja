import React from 'react';

import {Link} from "react-router-dom";

const Header = () => {

    const navBarData = [
        {
            name: 'Home',
            to: '/'
        }, {
            name: 'Games',
            to: '/games'
        }, {
            name: 'Social',
            to: '/social'
        }, {
            name: 'Checkout',
            to: '/checkout'
        }
        
    ]
      
    const navBar = navBarData.map((nav, index) => <Link key={index} to={nav.to}>{nav.name}</Link>)

    return (<header>
      <h1>xXShadowNinjaXx</h1>
        <nav> {navBar}</nav>
        <div class="route"></div>
    
    </header>)
    
}

export default Header;
