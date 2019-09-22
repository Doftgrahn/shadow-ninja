import {
  SEND_MESSAGE,
  UPDATE_CHAT,
  CHANGE_ROOM,
  GET_ALL_ROOMS,
  CLEAR_ROOMS,
  //IS_TYPING
} from "./actionTypes";

export const sendMessage = (socket, message) => dispatch => {
  socket.emit("send", message);

  dispatch({
    type: SEND_MESSAGE,
    payload: message
  });
};

export const updatechat = socket => dispatch => {
  socket.on("updatechat", data => {
    dispatch({
      type: UPDATE_CHAT,
      payload: data
    });
  });
};

export const currentRoom = socket => dispatch => {
  socket.on("updaterooms", (rooms, current_room) => {
    let allRooms = rooms.map(room => ({room}));
    const data = {
      current_room: current_room,
      rooms: allRooms
    };

    dispatch({
      type: GET_ALL_ROOMS,
      room: data
    });
  });
};

export const switchRoom = (socket, room) => dispatch => {
  socket.emit("switchRoom", room);

  dispatch({
    type: CHANGE_ROOM,
    room: room
  });
};

export const clearChat = room => ({
  type: CLEAR_ROOMS,
  room
});
