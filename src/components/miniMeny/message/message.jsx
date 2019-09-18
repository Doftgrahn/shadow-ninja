import React, {useState} from 'react';

import Chat from '../../chat/chat';

const Message = () => {
    //only true during testing
    const [toggleChat, setToggleChat] = useState(true);

    const hideShow = () => setToggleChat(!toggleChat);

    return (<main className="message">
        <button onClick={hideShow}>{toggleChat ? 'Close' : 'Chat'}</button>
        <div className={`message__container ${ !toggleChat
                ? 'show'
                : 'hide'}`}>
            <Chat/>
        </div>
    </main>)
}

export default Message;
