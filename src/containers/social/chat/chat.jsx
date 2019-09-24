import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import Fade from 'react-reveal/Fade';

import useSocket from 'use-socket.io-client';

import ChatRooms from './chatRooms/chatRooms';
import ChatMessages from './chatMessages/ChatMessages';
import SendMessage from './sendMessage/sendMessage';

import {updatechat, currentRoom, numberOnline, clearChat} from '../../../services/socket/socketActions';

const Chat = ({chat, user}) => {

    const dispatch = useDispatch();
    const [socket] = useSocket({autoConnect: false, transports: ['websocket']});
    const {name, id} = user.user;
    socket.connect();

    useEffect(() => {
        const user = {
            name: name,
            id: id
        }
        socket.emit('adduser', user)
    }, [socket, name, id, dispatch])

    useEffect(() => {
        dispatch(clearChat())
        dispatch(numberOnline(socket))
        dispatch(updatechat(socket))
        dispatch(currentRoom(socket))

        return() => socket.disconnect()

    }, [dispatch, socket])

    /* .filter(e => e.room === chat.current_room) */

    return (<main className="chat">
        <Fade>
            <ChatRooms socket={socket}/>
            <ChatMessages/>
            <SendMessage socket={socket}/>
        </Fade>
    </main>)
}

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Chat);
