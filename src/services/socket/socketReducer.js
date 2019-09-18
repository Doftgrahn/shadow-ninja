import {SEND_MESSAGE, RECIEVE_MESSAGE,CHANGE_ROOM} from "./actionTypes";

const initialState = {
  data: [],
  recivingMessage: false,
  room: 'general'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {...state, data: [...state.data]};

    case RECIEVE_MESSAGE:
      return {...state, data: [...state.data, action.payload]};

      case CHANGE_ROOM:
      console.log(state);
      return {...state, room: action.room}

    default:
      return state;
  }
}
