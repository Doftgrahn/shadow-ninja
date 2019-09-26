import {
  SOCKET,
  SEND_MESSAGE,
  UPDATE_CHAT,
  CHANGE_ROOM,
  GET_ALL_ROOMS,
  CLEAR_ROOMS,
  NUMBER_ONLINE,
  IS_TYPING
} from "./actionTypes";

export const defaultSocket = socket => ({
  type: SOCKET,
  payload: socket
});

export const sendMessage = (socket, message, user, room,id) => dispatch => {
  const data = {
    message,
    user,
    room,
    id
  };

  socket.emit("send", data);

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

export const numberOnline = socket => dispatch => {
  socket.on("getUsers", data => {
    dispatch({
      type: NUMBER_ONLINE,
      payload: data
    });
  });
};

export const whoIsTyping = socket => dispatch => {
  socket.on("istyping", (data, name, room) => {
    console.log("ROOM", room);
    const whoIsTyping = {
      typer: data,
      user: name,
      room: room
    };

    dispatch({
      type: IS_TYPING,
      payload: whoIsTyping
    });
  });
};
export const clearChat = room => ({
  type: CLEAR_ROOMS,
  room
});
