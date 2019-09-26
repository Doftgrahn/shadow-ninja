import React, {useRef, useEffect} from 'react';

import {connect, useDispatch} from "react-redux";

import Dots from '../../../../components/dots/dots';
import {whoIsTyping} from '../../../../services/socket/socketActions';

const ChatMessages = ({chat, user, socket}) => {
    const dispatch = useDispatch();
    const messagesEndRef = useRef()

    const scrollToBottom = () => {
        if (messagesEndRef.current)
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    };

    useEffect(() => {
        dispatch(whoIsTyping(socket, chat.current_room))
    }, [socket, dispatch, chat.current_room])

    useEffect(() => scrollToBottom, [chat])

    const renderDots = () => {
        if (chat.isTyping.typer && chat.current_room === chat.isTyping.room) {
            return <Dots/>
        } else {
            return false
        }
    }

    const showMessages = chat
        .data
        .flat()
        .filter(e => e.room === chat.current_room)
        .map((e, i) => <div className={`chat__content ${e.id === user.user.id
                ? 'activeUser'
                : null}`} key={i}>
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
