import React, {useState, useEffect, useRef} from 'react';
import {connect, useDispatch} from "react-redux";
import Fade from 'react-reveal/Fade';

import useSocket from 'use-socket.io-client';

import {ReactComponent as Send} from '../../../components/SVG_Icons/send/send.svg';

import {
    clearChat,
    switchRoom,
    sendMessage,
    updatechat,
    currentRoom,
    numberOnline
} from '../../../services/socket/socketActions';

const Chat = ({chat, user}) => {
    const myChat = chat
        .data
        .flat()
    const messagesEndRef = useRef()
    const dispatch = useDispatch();
    const [socket] = useSocket('/', {autoConnect: false});
    const {name, id} = user.user;
    const [input, setInput] = useState('');
    socket.connect();

    const scrollToBottom = () => {
        if (messagesEndRef.current)
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
    };

    useEffect(() => scrollToBottom, [chat])
    useEffect(() => {

        const user = {
            name: name,
            id: id
        }
        socket.emit('adduser', user)
    }, [socket, name, id, dispatch])

    useEffect(() => {
        dispatch(numberOnline(socket))
        dispatch(updatechat(socket))
        dispatch(currentRoom(socket))

        return() => socket.close()

    }, [dispatch, socket])

    const roomSwitch = room => {
        dispatch(clearChat())
        dispatch(switchRoom(socket, room))
    }

    const send = () => {
        if (input && user.user) {
            dispatch(sendMessage(socket, input, name))
            setInput('')
        }
    }

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            send()
        }
    }

    /* .filter(e => e.room === chat.current_room) */

    // Renders Group Buttons
    const renderChatButtons = chat
        .rooms
        .map((e, i) => <button disabled={chat.current_room === e.room} className={`room-btn ${chat.current_room === e.room
                ? 'btn-active'
                : null}`} onClick={() => roomSwitch(e.room)} key={i}>{e.room}</button>)
    const showMessages = myChat.map((e, i) => <div className={`chat__content ${e.id === user.user.id
            ? 'activeUser'
            : ''}`} key={i}>
        <h4 className="user">{e.user}</h4>
        <p>{e.message}</p>
        <p>{e.time}</p>
    </div>)

    return (<main className="chat">
        <Fade>

            <div className="chat__room">
                {renderChatButtons}
            </div>

            <div className="chat__wrapper" ref={messagesEndRef}>
                {showMessages}
                <div/>
            </div>

            <div className="sendInput">
                <textarea placeholder="Write Something..." onKeyPress={(e) => pressEnter(e)} type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <div className="send_container">
                    <button onClick={send}><Send/></button>
                </div>
            </div>
        </Fade>
    </main>)
}

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Chat);
