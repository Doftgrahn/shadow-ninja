import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      //When loading.
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      // When success
      return {
        ...state,
        users: [...state.users, ...action.payload.products],
        loading: false,
        error: null
      };

    case FETCH_USERS_FAILURE:
      // If failure.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: []
      };

    default:
      return state;
  }
}
