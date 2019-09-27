import React from 'react';
import {connect} from "react-redux";
import useSocket from 'use-socket.io-client';

import UnAuthorised from './chat/unAuthorised/unAuthorised';
import Chat from './chat/chat';
import Sidebar from './sidebar/sidebar';

const Social = ({user}) => {
    const [socket] = useSocket('/', {
        autoConnect: false,
        transports: ['websocket']
    });

    if (user.user.name) {
        socket.connect();
    }

    if (!user.user.name)
        return <UnAuthorised/>

    return (<main className="social">
        <Sidebar socket={socket}/>
        <Chat socket={socket}/>
        <div className="alternate"/>
    </main>)
}

const mapStateToProps = state => ({user: state.auth});

export default connect(mapStateToProps)(Social);
