import React from 'react';

import {Link} from "react-router-dom";

const NavBar = () => {

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



  return(
    <nav className='navMenu'> {navBar}</nav>
  )
}



export default NavBar;
