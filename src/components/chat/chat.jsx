import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {useDispatch} from 'react-redux';

import {sendMessage, recivingMessage} from '../../services/socket/socketActions';

import {ReactComponent as Send} from '../../components/SVG_Icons/send/send.svg';

import io from "socket.io-client";
import {getRandomColor} from '../../functions/randomColor';

const socket = io();

const Chat = ({chat, user}) => {
    const messageChatEnd = React.createRef()

    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const {name} = user.user;

    useEffect(() => {
        //socket.open();

        socket.on('chat message', message => {
            dispatch(recivingMessage(message))
        })

        //socket.close()
    }, [dispatch])

    const scrollToBottom = () => {
        if (messageChatEnd.current)
            messageChatEnd
                .current
                .scrollIntoView({behavior: 'smooth'})
        }

    const send = () => {
        if (input) {
            dispatch(sendMessage(input, name))
            setInput('')
            scrollToBottom()

        }
    }

    let showMessages;
    if (chat)
        showMessages = chat
            .data
            .map((e, i) => <div className="chat__content" key={i} ref={messageChatEnd}>
                <p style={getRandomColor()} className="user">{e.user}:</p>
                <p>{e.message}</p>
                <p>{e.time}</p>
            </div>)

    return (<main className="chat">
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

export default connect(mapStateToProps, {sendMessage})(Chat);
