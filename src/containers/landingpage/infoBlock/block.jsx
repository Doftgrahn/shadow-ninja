import React from 'react';
import {Link} from "react-router-dom";

import {connect} from 'react-redux';

import Fade from 'react-reveal/Fade';

const Block = ({users}) => {

    const howmany = users
        .users
        .flat()
        .length;

    return <section className="block">

        <div className="block__wrapper">

            <Fade left={true}>
                <h3>We are an online community with over {howmany} registred users</h3>
            </Fade>
            <Fade right={true}>
                <Link to="/login">
                    <h3>Join now to be one of them</h3>
                </Link>
            </Fade>
        </div>

    </section>
}

const mapStateToProps = state => ({users: state.users})

export default connect(mapStateToProps)(Block);
