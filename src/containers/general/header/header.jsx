import React ,{useState} from 'react';
import NavBar from './navBar/navBar';
import Hamburger from './hamburger/hamburger';
import StoreNavbar from './storenavbar/storenavbar';



const Header = () => {
const [toggle, setToggle] = useState(false);

const toggleState = () => setToggle(!toggle)
const turnOff = () => setToggle(false);


    return (<header className="header">
        <h5>xXShadowNinjaXx</h5>
        <Hamburger
        toggleState={toggleState}
        toggle={toggle}/>


        <StoreNavbar
        toggle={toggle}
        turnOff={turnOff}
        />

        <NavBar
        toggle={toggle}
        turnOff={turnOff}
        />
      

    </header>)
}

export default Header;
