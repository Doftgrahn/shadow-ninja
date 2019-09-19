import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import io from "socket.io-client";
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
    const messageChatEnd = React.createRef()

    const [input, setInput] = useState('');
    const {name} = user.user;

    useEffect(() => {
        const host = window.location.origin;
        const socket = io.connect('/' || 'https://' + host);

        socket.on('connect', () => {
            console.log('Connected to Chat');
            socket.emit('adduser', name)
        })

        socket.on('updatechat', (username, data) => {
            dispatch(updatechat(username, data))
            console.log('UPDATE CHAT', data);
        })

        socket.on('updaterooms', (rooms, current_room) => {
            dispatch(currentRoom(current_room))
            dispatch(getAllRooms(rooms))
        })

        return() => socket.on('disconnect', () => {
            console.log('disconnected from chat');
        })

    }, [name, dispatch])

    const roomSwitch = (room) => {
        dispatch(clearChat())
        const host = window.location.origin;
        const socket = io.connect();
        /*
        socket.on('updatechat', (username, data) => {
            dispatch(updatechat(username, data))
            console.log('UPDATE CHAT', data);
        })
        */


        socket.on('updaterooms', (rooms, current_room) => {
            dispatch(currentRoom(current_room))
            dispatch(getAllRooms(rooms))
        })


        dispatch(switchRoom(room))
    }

    const renderChatButtons = chat
        .rooms
        .map((e, i) => <button className={`room-btn ${chat.current_room === e.room
                ? 'btn-active'
                : ''}`} onClick={() => roomSwitch(e.room)} key={i}>{e.room}</button>)

    const send = () => {
        if (input) {
            dispatch(sendMessage(input, name))
            setInput('')
        }
    }

    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            send()
        }
    }

    let showMessages;
    if (chat)
        showMessages = chat
            .data
            .map((e, i) => <div className="chat__content" key={i} ref={messageChatEnd}>
                <p className="user">{e.user}:</p>
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
