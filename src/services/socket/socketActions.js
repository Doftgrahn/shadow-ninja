import {SEND_MESSAGE, RECIEVE_MESSAGE, CHANGE_ROOM} from "./actionTypes";

import io from "socket.io-client";

const socket = io();

export const sendMessage = (message, user, room) => dispatch => {
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const data = {
    user: user,
    time: time,
    message: message,
    room: room
  };

  socket.emit("send", data);

  dispatch({
    type: SEND_MESSAGE,
    payload: data
  });
};

export const recivingMessage = message => ({
  type: RECIEVE_MESSAGE,
  payload: message
});

export const changeRoom = room => dispatch => {

  socket.emit("subscribe", room);

  dispatch({type: CHANGE_ROOM, room: room});
};
