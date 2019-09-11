import React from 'react';

import {Link} from "react-router-dom";

const NavBar = ({toggle, turnOff}) => {

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
          }
      ]

      const navBar = navBarData.map((nav, index) => <Link onClick={turnOff} key={index} to={nav.to}>{nav.name}</Link>)



  return(
    <nav className={`navMenu ${toggle ? 'activeNav': ''}`}> {navBar}</nav>
  )
}



export default NavBar;
