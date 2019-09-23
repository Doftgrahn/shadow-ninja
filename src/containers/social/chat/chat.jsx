import React, {useState, useEffect, useRef} from 'react';
import {connect, useDispatch} from "react-redux";

import useSocket from 'use-socket.io-client';

import {ReactComponent as Send} from '../../../components/SVG_Icons/send/send.svg';

import {clearChat, switchRoom, sendMessage, updatechat, currentRoom} from '../../../services/socket/socketActions';

const Chat = ({chat, user}) => {
    const messagesEndRef = useRef(null)
    const dispatch = useDispatch();
    const [socket] = useSocket('/', {autoConnect: false});
    const {name, id} = user.user;
    const [input, setInput] = useState('');
    socket.connect();

    const scrollToBottom = () => messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;

    useEffect(() => scrollToBottom, [chat])

    useEffect(() => {
        const user = {
            name: name,
            id: id
        }
        socket.emit('adduser', user)
    }, [socket, name, id])

    useEffect(() => {
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
            dispatch(sendMessage(socket, input))
            setInput('')
        }
    }

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            send()
        }
    }

    // Renders Group Buttons
    const renderChatButtons = chat
        .rooms
        .map((e, i) => <button disabled={chat.current_room === e.room} className={`room-btn ${chat.current_room === e.room
                ? 'btn-active'
                : null}`} onClick={() => roomSwitch(e.room)} key={i}>{e.room}</button>)

    const showMessages = chat
        .data
        .flat()
        .filter(e => e.room === chat.current_room)
        .map((e, i) => <div className={`chat__content ${e.id === user.user.id
                ? 'activeUser'
                : ''}`} key={i}>
            <p className="user">{e.user}</p>
            <p>{e.message}</p>
            <p>{e.time}</p>
        </div>)

    return (<main className="chat">

        <div className="chat__room">
            {renderChatButtons}
        </div>

        <div className="chat__wrapper" ref={messagesEndRef}>
            {showMessages}
            <div/>
        </div>

        <div className="sendInput">
            <input placeholder="Write Something..." onKeyPress={(e) => pressEnter(e)} type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={send}><Send/></button>
        </div>
    </main>)
}

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Chat);
