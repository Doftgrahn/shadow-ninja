import React from 'react';

import {connect} from 'react-redux';

import Fade from 'react-reveal/Fade';

const Block = ({users}) => {

    console.log(users);
    const howMany = users.users.length;
    console.log(howMany);


    return <section className="block">

        <div className="block__wrapper">

            <Fade left={true}>
                <h1>We are a online community with over {howMany} users daily.</h1>
            </Fade>
            <Fade right={true}>
                <h1>Join now to be one of them.</h1>
            </Fade>
        </div>

    </section>
}

const mapStateToProps = state => ({users: state.users})

export default connect(mapStateToProps)(Block);
