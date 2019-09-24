import React, {useState} from 'react';

import {connect, useDispatch} from "react-redux";

import {ReactComponent as Send} from '../../../../components/SVG_Icons/send/send.svg';

import {sendMessage} from '../../../../services/socket/socketActions';

const SendMessage = ({socket, user}) => {
    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const send = () => {
        if (input && user.user) {
            dispatch(sendMessage(socket, input, user.user.name))
            setInput('')
        }
    }
    const pressEnter = (e) => {
        if (e.key === 'Enter') {
            send()
        }
    }

    return (<div className="sendInput">
        <textarea placeholder="Write Something..." onKeyPress={(e) => pressEnter(e)} type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <div className="send_container">
            <button onClick={send}><Send/></button>
        </div>
    </div>)
}

const mapStateToProps = state => ({user: state.auth})

export default connect(mapStateToProps)(SendMessage);
