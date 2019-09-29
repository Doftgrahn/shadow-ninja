import React from 'react';

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

        </div>

    </section>)
}

export default PromoChat;
