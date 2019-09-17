import {SEND_MESSAGE, RECIEVE_MESSAGE} from "./actionTypes";

import io from "socket.io-client";

const socket = io();

export const sendMessage = (message, user) => dispatch => {
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const data = {
    user: user,
    time: time,
    message: message
  };

  socket.emit("chat message", data);

  dispatch({
    type: SEND_MESSAGE,
    payload: data
  });
};

export const recivingMessage = message => ({
  type: RECIEVE_MESSAGE,
  payload: message
});