import React from 'react';
import {Link} from "react-router-dom";

import Fade from 'react-reveal/Fade';

import {ReactComponent as Hero} from '../../components/icon/ninja_page.svg';

//import Glitch from '../../components/glitch/glitch';
import Block from './infoBlock/block';
import PromoBlock from './promoBlock/promoBlock';
import PromoChat from './promoChat/promoChat';


const LandingPage = () => {
    return (<main className="landingpage">
        <Fade>
            <div className="box">
                <figure>
                    <Hero/>
                </figure>

                <div className="title">
                    {/* <Glitch/> */}
                    {<p className="big textCarosel"></p>}
                    <Link to={'/store'}>
                        <button className="hover ">Store</button>
                    </Link>

                </div>

            </div>
            <Block/>
            <PromoBlock/>
            <PromoChat/>
        </Fade>
    </main>)
}

export default LandingPage;
