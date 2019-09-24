import React, {useRef, useEffect} from 'react';

import {connect} from "react-redux";

const ChatMessages = ({chat, user}) => {
    const messagesEndRef = useRef()

    const scrollToBottom = () => {
        if (messagesEndRef.current) 
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    };

    useEffect(() => scrollToBottom, [chat])

    const showMessages = chat
        .data
        .flat()
        .map((e, i) => <div className={`chat__content ${e.id === user.user.id
                ? 'activeUser'
                : ''}`} key={i}>
            <h4 className="user">{e.user}</h4>
            <p>{e.message}</p>
            <p>{e.time}</p>
        </div>)

    return (<div className="chat__wrapper" ref={messagesEndRef}>
        {showMessages}
        <div/>
    </div>)

}

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(ChatMessages)
