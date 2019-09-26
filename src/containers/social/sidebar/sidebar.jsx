import React from "react";

import {connect} from "react-redux";

import UsersOnline from "./usersOnline/usersOnline";
import ChatRooms from './chatRooms/chatRooms';

import {ReactComponent as Logo} from './../../../components/icon/icon_ninja.svg';

const Sidebar = ({socket, chat}) => {

    return (<main className="sidebar">
        <div className="logo__Wrapper">
            <Logo/>
        </div>
        <h3>{chat.current_room}
        </h3>
        <ChatRooms socket={socket}/>
        <UsersOnline/>
    </main>);
};

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Sidebar);
