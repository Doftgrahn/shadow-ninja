import {
  SEND_MESSAGE,
  UPDATE_CHAT,
  CLEAR_ROOMS,
  GET_ALL_ROOMS,
  CHANGE_ROOM
} from "./actionTypes";

const initialState = {
  data: [],
  current_room: "",
  rooms: [],
  isTyping: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {...state, data: [...state.data]};

    case UPDATE_CHAT:
      return {...state, data: [...state.data, action.payload]};

    case GET_ALL_ROOMS:
      return {...state, ...action.room};

    case CLEAR_ROOMS:
      return {...state, data: []};

    case CHANGE_ROOM:
      return {...state, current_room: action.room};

    default:
      return state;
  }
}
