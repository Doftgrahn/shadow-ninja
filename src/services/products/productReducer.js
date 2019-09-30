import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_FETCHQUERY,
  SORT_PRODUCTS,
  FILTER_PRODUCTS
} from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  sort: '',
  filter: 'All',
  skip: 0
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
		items: state.items.concat(action.payload.products),
		// items: [...state.items, ...action.payload.products,
		skip: state.items.concat(action.payload.products).length,
        loading: false,
        error: null
      };
	  case FETCH_PRODUCTS_FETCHQUERY:
	  return {
		  ...state,
		  items: action.payload.products,
		  skip: action.payload.products.length,
		  loading: false,
		  error: null
	  }
    case FETCH_PRODUCTS_FAILURE:
    // If failure.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
	  case SORT_PRODUCTS:
  		return {
	  		...state,
	  		sort: action.payload
	  	};
		case FILTER_PRODUCTS:
			return {
				...state,
				filter: action.payload
			}

	    default:
	      return state;
	  }
}
