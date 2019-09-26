import React from "react";

import {connect} from "react-redux";

import UsersOnline from "./usersOnline/usersOnline";
import ChatRooms from './chatRooms/chatRooms';

const Sidebar = ({socket,chat}) => {

  return (
    <main className="sidebar">
        <ChatRooms socket={socket}/>
        <span>You are in {chat.current_room} chat.</span>
      <UsersOnline />
    </main>
  );
};

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Sidebar);
