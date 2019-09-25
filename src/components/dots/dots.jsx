import React from 'react';

import {connect} from "react-redux";

const Dots = ({chat}) => {
    return (
    <div className="wave">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <p>{chat.isTyping.user} is typing something exciting...</p>
    </div>)
}

const mapStateToProps = state => ({chat: state.chat});

export default connect(mapStateToProps)(Dots);
