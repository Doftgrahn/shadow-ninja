import React from "react";

import {connect} from "react-redux";

import UsersOnline from "./usersOnline/usersOnline";
import ChatRooms from './chatRooms/chatRooms';

const Sidebar = ({socket}) => {

  return (
    <main className="sidebar">
        <ChatRooms socket={socket}/>
      <UsersOnline />
    </main>
  );
};

const mapStateToProps = state => ({chat: state.chat, user: state.auth});

export default connect(mapStateToProps)(Sidebar);
