import {LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT} from './actionTypes';

const initialState = {
  products: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.payload
      };
    case ADD_PRODUCT:
      return {
        ...state,
        productAdd: Object.assign({}, action.payload)
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productRemove: Object.assign({}, action.payload)
      };
    default:
      return state;
  }
}
