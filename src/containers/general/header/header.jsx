import React ,{useState} from 'react';
import NavBar from './navBar/navBar';
import Hamburger from './hamburger/hamburger';

const Header = () => {
const [toggle, setToggle] = useState(false);
const toggleState = () => setToggle(!toggle)
const turnOff = () => setToggle(false);


    return (<header className="header">
        <h1>xXShadowNinjaXx</h1>
        <Hamburger
        toggleState={toggleState}
        toggle={toggle}/>

        <NavBar
        toggle={toggle}
        turnOff={turnOff}
        />

    </header>)
}

export default Header;
