import {
  SET_CURRENT_USER,
  USER_LOADING,
  UPDATE_USER_CURRENCY,
  UPDATE_USER_LIBRARY,
  CHANGE_PURCHASE_TRUE_FALSE
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  isPurchaseValid: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        isPurchaseValid: true
      };
    case UPDATE_USER_CURRENCY:
      return {
        ...state,
        user: action.payload
      };
    case UPDATE_USER_LIBRARY:
      return {
        ...state,
        user: action.payload
      }
    case CHANGE_PURCHASE_TRUE_FALSE:
      return {
        ...state,
        isPurchaseValid: action.payload
      }
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
