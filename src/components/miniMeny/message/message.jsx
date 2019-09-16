import React, {useState} from 'react';

import Chat from '../../chat/chat';

const Message = () => {
    const [toggleChat, setToggleChat] = useState(false);

    const hideShow = () => setToggleChat(!toggleChat);

    return (<main className="message">
        <button onClick={hideShow}>Chat</button>
        <div className={`message__container ${ !toggleChat
                ? 'show'
                : 'hide'}`}>
                <h2>General Chat</h2>
            <Chat/>
        </div>
    </main>)
}

export default Message;
