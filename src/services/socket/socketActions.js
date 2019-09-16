import {SEND_MESSAGE, RECIEVE_MESSAGE} from "./actionTypes";

import io from "socket.io-client";

const socket = io();

export const sendMessage = message => dispatch => {
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const data = {
    time,
    message: message
  };

  socket.emit("chat message", message);

  dispatch({
    type: SEND_MESSAGE,
    payload: data
  });
};

export const recivingMessage = message => dispatch => {


 socket.on('chat message', data => {
     dispatch({type: RECIEVE_MESSAGE, payload:message});

})

};
