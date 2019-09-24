import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const NavBar = ({toggle, turnOff, isAuthenticated, auth}) => {
    let toggleLogin = {};
    if (isAuthenticated) {
        toggleLogin = {
            name: 'Account',
            to: '/userProfile'
        };
    } else {
        toggleLogin = {
            name: 'Login',
            to: '/register'
        }
    }
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
        },
        toggleLogin
    ]

    const navBar = navBarData.map((nav, index) => <Link onClick={turnOff} key={index} to={nav.to}>{nav.name}</Link>)

    return (<nav className={`navMenu ${toggle
            ? 'activeNav'
            : ''}`}>
        {navBar}</nav>)
};

const mapStateToProps = state => ({auth: state.auth, isAuthenticated: state.auth.isAuthenticated});

export default connect(mapStateToProps)(NavBar);
