import React, {useRef, useEffect} from 'react';

import {connect, useDispatch} from "react-redux";

import Dots from '../../../../components/dots/dots';
import {whoIsTyping} from '../../../../services/socket/socketActions';

const ChatMessages = ({chat, user, socket}) => {
    const dispatch = useDispatch();
    const messagesEndRef = useRef()

console.log(chat.isTyping);
    const scrollToBottom = () => {
        if (messagesEndRef.current)
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    };

    useEffect(() => {
        dispatch(whoIsTyping(socket, user))
    }, [socket, dispatch, user])

    useEffect(() => scrollToBottom, [chat])

    const renderDots = () => {
        if (chat.isTyping) {
            return <Dots/>
        } else {
            return false
        }
    }



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
        {renderDots()}
        <div/>
    </div>)

}

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(ChatMessages)
