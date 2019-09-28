import React from 'react';

import {connect} from 'react-redux';

import Fade from 'react-reveal/Fade';

const Block = ({users}) => {


    return <section className="block">

        <div className="block__wrapper">

            <Fade left={true}>
                <h1>We are a online community with over 1000 users daily.</h1>
            </Fade>
            <Fade right={true}>
                <h1>Join now to be one of them.</h1>
            </Fade>
        </div>

    </section>
}

const mapStateToProps = state => ({users: state.users})

export default connect(mapStateToProps)(Block);
