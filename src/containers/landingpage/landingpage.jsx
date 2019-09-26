import React from 'react';
import {Link} from "react-router-dom";

import Fade from 'react-reveal/Fade';

import {ReactComponent as Hero} from '../../components/icon/ninja page.svg';

const LandingPage = () => {
    return (<main className="box">
        <Fade>
            <Hero/>
            <div className="box-wrapper">
                <div className="title">

                 

            {<h1 className="big textCarosel"> 
           </h1>}
           
           
            <Link to={'/store'}>
                <button className="hover ">Store</button>
            </Link>
            
        </div>
        </div>
    </Fade>
    </main>)
}

export default LandingPage;
