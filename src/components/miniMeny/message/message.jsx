import React, {useState} from 'react';

//import Chat from '../../chat/chat';

const Message = () => {
    //only true during testing
    const [toggleChat, setToggleChat] = useState(false);

    const hideShow = () => setToggleChat(!toggleChat);

    return (<main className="message">
        <div className={`message__container ${ !toggleChat
                ? 'show'
                : 'hide'}`}>
            {/*Chat/>*/}
        </div>
        <button onClick={hideShow}>{toggleChat ? 'Close' : 'Chat'}</button>
    </main>)
}

export default Message;
