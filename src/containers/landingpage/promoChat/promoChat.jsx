import React from 'react';

import {Link} from "react-router-dom";

import Fade from 'react-reveal/Fade';

const PromoChat = () => {
    return (<section className="PromoChat">
        <div className="PromoChat__wrapper">
            <Fade left={true}>
                <h1>We are the community.</h1>
            </Fade>
            <Fade right={true}>
                <h3>Together we are strong.</h3>
            </Fade>
            <Fade left={true}>
                <Link to="/social">Join our Chat of latest update.</Link>
            </Fade>

        </div>

    </section>)
}

export default PromoChat;
