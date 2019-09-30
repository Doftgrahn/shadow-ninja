import React from 'react';

import {Link} from "react-router-dom";

import Fade from 'react-reveal/Fade';

const EasterEgg = () => {
    return (<section className="easterEgg">
        <Fade right={true}>
            <Link to="/snake">Click me.</Link>
        </Fade>
    </section>)
}

export default EasterEgg;
