import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {useDispatch} from 'react-redux';

import {sendMessage, recivingMessage} from '../../services/socket/socketActions';

const Chat = ({chat}) => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const send = () => {
        dispatch(sendMessage(input))
        setInput('')
    }

console.log(chat);
    useEffect(() => {

        dispatch(recivingMessage())
    }, [dispatch, chat])

    let showMessages;
    if (chat.length)
        showMessages = chat
            .data
            .map((e, i) => <div key={i}>
                <p>{e.message}</p>
                <p>{e.time}</p>
            </div>)

    return (<main className="chat">Chat {showMessages}
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={send}>Send</button>
    </main>)
}

const mapStateToProps = state => ({chat: state.chat});

export default connect(mapStateToProps, {sendMessage})(Chat);
