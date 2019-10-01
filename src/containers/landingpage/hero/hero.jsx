import React from 'react';
//import Glitch from '../../../components/glitch/glitch';

import Fade from 'react-reveal/Fade';

import {Link} from "react-router-dom";

const Hero = () => {
    return (<section className="hero">

        <div className="mainText">
            {/*<Glitch/>*/}
            <Fade right={true}>
            <h1 className="glitch" data-text="Shadow Ninja.">Shadow Ninja.</h1>
            </Fade>

        </div>

        <div className="toStoreBtn">
            <Link to={'/store'}>
                <button className="hover ">Store</button>
            </Link>

        </div>

    </section>)
}

export default Hero;
