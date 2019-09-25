import React, {useState} from 'react';
import NavBar from './navBar/navBar';
import Hamburger from './hamburger/hamburger';
// import StoreNavbar from './storenavbar/storenavbar';

// import {ReactComponent as Hero} from './../../../components/icon/shadow.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const toggleState = () => setToggle(!toggle)
    const turnOff = () => setToggle(false);

    return (<header className="header">
        
        <h1>xX~SN~Xx</h1>
          <NavBar toggle={toggle} turnOff={turnOff}/>

          <Hamburger toggleState={toggleState} toggle={toggle}/>

    </header>)
}

export default Header;


//<div className="icon_wrapper">
         //<Hero/>
       // </div>