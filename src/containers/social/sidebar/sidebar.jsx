import React from "react";

import {connect} from "react-redux";

import UsersOnline from "./usersOnline/usersOnline";
import ChatRooms from './chatRooms/chatRooms';

const Sidebar = ({socket, chat}) => {

    return (<main className="sidebar">
        <h3>{chat.current_room} chat</h3>
        <ChatRooms socket={socket}/>
        <UsersOnline/>
    </main>);
};

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Sidebar);
