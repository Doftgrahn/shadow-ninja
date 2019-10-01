import React from 'react';

import Fade from 'react-reveal/Fade';

//import Glitch from '../../components/glitch/glitch';
import Hero from './hero/hero';
import Block from './infoBlock/block';
import PromoBlock from './promoBlock/promoBlock';
import PromoChat from './promoChat/promoChat';
import EasterEgg from './easterEgg/easterEgg';

const LandingPage = () => {
    return (<main className="landingpage">
        <Fade>
            <Hero/>

            <Block/>
            <PromoBlock/>
            <PromoChat/>
            <EasterEgg/>
        </Fade>
    </main>)
}

export default LandingPage;
