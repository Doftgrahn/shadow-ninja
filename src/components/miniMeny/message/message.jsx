import React, {useState} from 'react';

import Chat from '../../chat/chat';

const Message = () => {
    const [toggleChat, setToggleChat] = useState(false);

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
