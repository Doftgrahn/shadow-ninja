import React, {useState, useEffect, useRef} from 'react';
import {connect, useDispatch} from "react-redux";

import {ReactComponent as Send} from '../../../../components/SVG_Icons/send/send.svg';

import {sendMessage} from '../../../../services/socket/socketActions';

const SendMessage = ({socket, user, chat}) => {
    const dispatch = useDispatch();
    const isInitialMount = useRef(true);
    const [input, setInput] = useState('');

    useEffect(() => {
        if (chat.current_room) {
            setInput('')
        }
    }, [chat.current_room])

    useEffect(() => {
        const {name} = user.user;
        if (isInitialMount.current) {
            isInitialMount.current = false;
            //dispatch(clearChat())
        } else {
            socket.emit("typing", true, name);

            const typer = setTimeout(() => {
                socket.emit("typing", false);
            }, 1000)

            return() => clearTimeout(typer)
        }

    }, [input, dispatch, socket, user.user])

    const send = () => {
        console.log(chat.current_room);
        if (input && user.user) {
            dispatch(sendMessage(socket, input, user.user.name, chat.current_room, user.user.id))
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

const mapStateToProps = state => ({user: state.auth, chat: state.chat})

export default connect(mapStateToProps)(SendMessage);
