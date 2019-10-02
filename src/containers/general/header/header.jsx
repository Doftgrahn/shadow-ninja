import React, {useState} from 'react';
import NavBar from './navBar/navBar';
import Hamburger from './hamburger/hamburger';
import {useDispatch} from 'react-redux'
// import StoreNavbar from './storenavbar/storenavbar';
import {Link} from "react-router-dom";

import { setGameStateFalse} from '../../../services/products/productActions';
import {ReactComponent as Logo} from './../../../components/icon/icon_ninja.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();

    const toggleState = () => setToggle(!toggle)

	const turnOffAndChangeState = () => {
		dispatch(setGameStateFalse())
		setToggle(false)
	};

    const turnOff = () => {

		setToggle(false)
	};


    return (<header className="header">
        <div className="logo">
            <Link to="/"><Logo/></Link>
        </div>

        <NavBar toggle={toggle} turnOff={turnOff} turnOffAndChangeState={turnOffAndChangeState}/>

        <Hamburger toggleState={toggleState} toggle={toggle}/>

    </header>)
}

export default Header;
