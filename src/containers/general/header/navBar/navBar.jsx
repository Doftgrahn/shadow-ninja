import React from 'react';
import {connect} from "react-redux";
import StoreNavbar from '../storenavbar/storenavbar';
import {Link} from "react-router-dom";

const NavBar = ({toggle, turnOff, isAuthenticated, auth, total}) => {

    let toggleLogin = {};
    if (isAuthenticated) {
        toggleLogin = {
            name: 'Account',
            to: '/userProfile'
        };
    } else {
        toggleLogin = {
            name: 'Login',
            to: '/Login'
        }
    }

    const totalProducts = total.productQuantity;

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

    const navBar = navBarData.map((nav, index) => {
        if (nav.name === 'Checkout') {
            return <Link className="navTotal" onClick={turnOff} key={'hej'+index} to={nav.to}>{nav.name}
                <span className={`navTotal-total ${!totalProducts ? 'remove' : 'there'}`}>{totalProducts}</span>
            </Link>
        } else {
            return <Link onClick={turnOff} key={index} to={nav.to}>{nav.name}</Link>
        }
    })

    return (<nav className={`navMenu ${toggle
            ? 'activeNav'
            : ''}`}>
        <StoreNavbar toggle={toggle} turnOff={turnOff}/>{navBar}
    </nav>)
};

const mapStateToProps = state => ({auth: state.auth, isAuthenticated: state.auth.isAuthenticated, total: state.total.data});

export default connect(mapStateToProps)(NavBar);
