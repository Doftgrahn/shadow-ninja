import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {useDispatch} from 'react-redux';

import {sendMessage, recivingMessage, changeRoom} from '../../services/socket/socketActions';

import {ReactComponent as Send} from '../../components/SVG_Icons/send/send.svg';

import io from "socket.io-client";
import {getRandomColor} from '../../functions/randomColor';

const Chat = ({chat, user}) => {
    const messageChatEnd = React.createRef()
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const {name} = user.user;

    useEffect(() => {
        const {room} = chat;
        const host = window.location.origin;
        const socket = io('/' || 'https://' + host);
        socket.connect();
        socket.emit('subscribe', room)

        socket.on('chat message', message => {
            console.log('MESSAGE:', message);
            dispatch(recivingMessage(message))

        })

        return() => socket.disconnect()

    }, [dispatch, chat])

    const scrollToBottom = () => {
        if (messageChatEnd.current)
            messageChatEnd
                .current
                .scrollIntoView({behavior: 'smooth'})
        }

    const send = () => {
        const {room} = chat;
        if (input) {
            dispatch(sendMessage(input, name, room))
            setInput('')
            scrollToBottom()
        }
    }

    const roomChange = room => dispatch(changeRoom(room))

    let showMessages;
    if (chat)
        showMessages = chat
            .data
            .filter(message => message.room === chat.room)
            .map((e, i) => <div className="chat__content" key={i} ref={messageChatEnd}>
                <p style={getRandomColor()} className="user">{e.user}:</p>
                <p>{e.message}</p>
                <p>{e.time}</p>
            </div>)

    return (<main className="chat">
        <div className="chat__room">
            <button className="room-btn" onClick={() => roomChange('general')}>General</button>
            <button className="room-btn" onClick={() => roomChange('games')}>Games</button>
            <button className="room-btn" onClick={() => roomChange('party')}>party</button>
        </div>
        <div className="chat__wrapper">
            {showMessages}
        </div>
        <div className="sendInput">
            <input placeholder="Write Something..." type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={send}><Send/></button>
        </div>
    </main>)
}

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps, {sendMessage, changeRoom})(Chat);
