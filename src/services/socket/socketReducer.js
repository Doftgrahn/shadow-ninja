import {
  SEND_MESSAGE,
  UPDATE_CHAT,
  CLEAR_ROOMS,
  CHANGE_ROOM,
  CURRENT_ROOM,
  ROOMS
} from "./actionTypes";

const initialState = {
  data: [],
  recivingMessage: false,
  current_room: "",
  rooms: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {...state, data: [...state.data]};

    case UPDATE_CHAT:
      return {...state, data: [...state.data, action.payload]};

    case CURRENT_ROOM:
      return {...state, current_room: action.room};

    case ROOMS:
        let allRooms = action.rooms.map(room => ({room}))

      return {...state, rooms: allRooms};

    case CLEAR_ROOMS:
      return {...state, data: []};

    case CHANGE_ROOM:
      return {...state, current_room: action.room};

    default:
      return state;
  }
}
