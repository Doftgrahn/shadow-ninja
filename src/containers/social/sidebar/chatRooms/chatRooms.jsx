import React from 'react';
import {connect, useDispatch} from "react-redux";

import {clearChat, switchRoom} from '../../../../services/socket/socketActions';

const ChatRooms = ({socket, chat}) => {
    const dispatch = useDispatch();
    
    const roomSwitch = room => {
        dispatch(clearChat())
        dispatch(switchRoom(socket, room))
    }

    const renderChatButtons = chat
        .rooms
        .map((e, i) => <button disabled={chat.current_room === e.room} className={`room-btn ${chat.current_room === e.room
                ? 'btn-active'
                : null}`} onClick={() => roomSwitch(e.room)} key={i}>{e.room}</button>)

    return (<div className="chat__room">
        {renderChatButtons}
    </div>)
}

const mapStateToProps = state => ({chat: state.chat})

export default connect(mapStateToProps)(ChatRooms)
