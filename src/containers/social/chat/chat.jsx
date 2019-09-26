import React, {useEffect} from 'react';
import {connect, useDispatch} from "react-redux";
import Fade from 'react-reveal/Fade';

import ChatMessages from './chatMessages/ChatMessages';
import SendMessage from './sendMessage/sendMessage';

import {updatechat, currentRoom, numberOnline} from '../../../services/socket/socketActions';

const Chat = ({socket, chat, user}) => {
    const dispatch = useDispatch();
    const {name, id} = user.user;

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
        return() => socket.disconnect()

    }, [dispatch, socket])

    /* .filter(e => e.room === chat.current_room) */

    return (<main className="chat">
        <Fade>
            <ChatMessages socket={socket}/>
            <SendMessage socket={socket}/>
        </Fade>
    </main>)
}

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Chat);
