import {
  SEND_MESSAGE,
  UPDATE_CHAT,
  CLEAR_ROOMS,
  GET_ALL_ROOMS,
  CHANGE_ROOM,
  NUMBER_ONLINE
} from "./actionTypes";

const initialState = {
  data: [],
  current_room: "",
  rooms: [],
  isTyping: false,
  number_online: []
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

    case NUMBER_ONLINE:
      return {
        ...state,
        number_online: [...state.data, action.payload]
      };

    default:
      return state;
  }
}
