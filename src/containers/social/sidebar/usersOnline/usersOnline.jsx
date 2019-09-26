import React from 'react';

import {connect} from "react-redux";

const UsersOnline = ({chat}) => {

    const howManyIsOnline = chat
        .number_online
        .flat()
        .map((online, i) => <p key={i}>{online.name}</p>)

    return (<section className="usersonline">
        <h4>online</h4>
        <div className="usersonline__container">
        {howManyIsOnline}
        </div>
    </section>)
}

const mapStateToProps = state => ({chat: state.chat});

export default connect(mapStateToProps)(UsersOnline);
