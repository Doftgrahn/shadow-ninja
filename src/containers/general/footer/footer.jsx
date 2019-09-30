import React from 'react';
import {connect} from "react-redux";

import {SocialIcon} from 'react-social-icons';
import {NavLink} from "react-router-dom";

const Footer = (isAuthenticated, auth,) => {

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


    const navBarData = [
        {
            name: 'Home',
            to: '/',
            exact: true
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
    ];

    const navBar = navBarData.map((nav, index) => {

        return <NavLink exact={nav.exact} activeClassName="active-route" key={index} to={nav.to}>{nav.name}</NavLink>
    })

    return (<footer className="footer">
        <div className="footer__wrapper">

            <div className="link__container">
                {navBar}
            </div>

            <div className="footer_description">
                <h3>Customer support</h3>
                <a className="a" href="intressantdokument.html#imail">ninja@jmail.com</a>
            </div>

            <div className="iconWrapper">
                <SocialIcon className="icon" url="http://twitter.com" bgColor="#333333" fgColor="white"/>
                <SocialIcon className="icon" url="http://facebook.com" bgColor="#333333" fgColor="white"/>
                <SocialIcon className="icon" url="http://instagram.com" bgColor="#333333" fgColor="white"/>
            </div>
        </div>

    </footer>)
}

const mapStateToProps = state => ({auth: state.auth, isAuthenticated: state.auth.isAuthenticated, total: state.total.data});

export default connect(mapStateToProps)(Footer);
