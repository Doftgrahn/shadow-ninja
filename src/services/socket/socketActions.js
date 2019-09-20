import {
  SEND_MESSAGE,
  UPDATE_CHAT,
  CHANGE_ROOM,
  CURRENT_ROOM,
  CLEAR_ROOMS,
  ROOMS
} from "./actionTypes";

//import io from "socket.io-client";

//const host = window.location.origin;
//const socket = io().connect();

export const sendMessage = (message, name) => dispatch => {
  const data = {
    user: name,
    message: message
  };


  dispatch({
    type: SEND_MESSAGE,
    payload: data
  });
};

export const updatechat = (username, message) => dispatch => {
  const data = {
    user: username,
    message: message
  };

  dispatch({
    type: UPDATE_CHAT,
    payload: data
  });
};

export const currentRoom = room => dispatch => {
  dispatch({
    type: CURRENT_ROOM,
    room: room
  });
};
export const getAllRooms = rooms => ({
  type: ROOMS,
  rooms: rooms
});

export const switchRoom = room => dispatch => {

  dispatch({
    type: CHANGE_ROOM,
    room: room
  });
};

export const clearChat = room => ({
  type: CLEAR_ROOMS,
  room
});
