import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function productReducer(
    state = initialState,
    action
) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
    //When loading.
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
    // When sucess
      return {
        ...state,
        items: action.payload.products,
        loading: false,
        error: null
      };
    case FETCH_PRODUCTS_FAILURE:
    // If failure.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
