import React, {useState} from 'react';
import NavBar from './navBar/navBar';
import Hamburger from './hamburger/hamburger';
// import StoreNavbar from './storenavbar/storenavbar';

import {ReactComponent as Logo} from './../../../components/icon/icon_ninja.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const toggleState = () => setToggle(!toggle)
    const turnOff = () => setToggle(false);

    return (<header className="header">
        <div className="logo">
            <Logo/>
        </div>

        <NavBar toggle={toggle} turnOff={turnOff}/>

        <Hamburger toggleState={toggleState} toggle={toggle}/>

    </header>)
}

export default Header;
