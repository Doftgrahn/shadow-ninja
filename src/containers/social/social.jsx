import React from 'react';


import UnAuthorised from './chat/unAuthorised/unAuthorised';

import {connect} from "react-redux";

import Chat from './chat/chat';

const Social = ({user}) => {

    if (!user.user.name) {
        return<UnAuthorised/>
    }

    return (<main>
        <Chat/>
    </main>)
}

const mapStateToProps = state => ({user: state.auth});

export default connect(mapStateToProps)(Social);
