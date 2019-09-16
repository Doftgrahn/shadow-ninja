import {SEND_MESSAGE, RECIEVE_MESSAGE} from "./actionTypes";

const initialState = {
  data: [],
  recivingMessage: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {...state,  data: [...state.data, action.payload] }

    case RECIEVE_MESSAGE:
      return {...state, data: [...state.data, action.payload] };

    default:
      return state;
  }
}
