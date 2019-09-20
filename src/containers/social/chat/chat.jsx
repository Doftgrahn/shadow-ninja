import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import useSocket from 'use-socket.io-client';
import {ReactComponent as Send} from '../../../components/SVG_Icons/send/send.svg';

import {
    clearChat,
    switchRoom,
    sendMessage,
    updatechat,
    getAllRooms,
    currentRoom
} from '../../../services/socket/socketActions';

//import {getRandomColor} from '../../functions/randomColor';

const Chat = ({chat, user}) => {
    const dispatch = useDispatch();
    const {name} = user.user;

    const [socket] = useSocket();
    const [input, setInput] = useState('');
    socket.connect();

    useEffect(() => {
        socket.emit('adduser', name)

        socket.on('updatechat', (username, data) => {
            dispatch(updatechat(username, data))
        })

        socket.on('updaterooms', (rooms, current_room) => {
            dispatch(currentRoom(current_room))
            dispatch(getAllRooms(rooms))
        })
        return() => dispatch(clearChat())

    }, [dispatch, name, socket])

    const roomSwitch = (room) => {
        dispatch(clearChat())
        socket.emit("switchRoom", room);
        dispatch(switchRoom(room))
    }

    const send = () => {
        if (input) {
            socket.emit("send", name, input);
            dispatch(sendMessage(input, name))
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
        .map((e, i) => <div className="chat__content" key={i}>
            <p className="user">{e.user}</p>
            <p>{e.message}</p>
            <p>{e.time}</p>
        </div>)

    return (<main className="chat">
        <div className="chat__room">
            {renderChatButtons}
        </div>
        <div className="chat__wrapper">
            {showMessages}
        </div>
        <div className="sendInput">
            <input placeholder="Write Something..." onKeyPress={(e) => pressEnter(e)} type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={send}><Send/></button>
        </div>
    </main>)
}

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Chat);
