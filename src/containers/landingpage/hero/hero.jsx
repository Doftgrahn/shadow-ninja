import React from 'react';

import Fade from 'react-reveal/Fade';

import {Link} from "react-router-dom";

const Hero = () => {
    return (<section className="hero">

        <div className="mainText">
            <Fade right={true}>
                <h1>Shadow Ninja.</h1>
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
