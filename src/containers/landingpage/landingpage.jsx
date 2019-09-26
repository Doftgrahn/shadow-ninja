import React from 'react';
import {Link} from "react-router-dom";

import Fade from 'react-reveal/Fade';

import {ReactComponent as Hero} from '../../components/icon/ninja_page.svg';

const LandingPage = () => {
    return (<main className="box">
        <Fade>
            <figure>
                <Hero/>
            </figure>

            <div className="title">
                <p className="big textCarosel"></p>
                <Link to={'/store'}>
                    <button className="hover ">Store</button>
                </Link>

            </div>
        </Fade>
    </main>)
}

export default LandingPage;
