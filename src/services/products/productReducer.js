import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_FETCHQUERY,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  SET_PRODUCTS_TRUE,
  SET_PRODUCTS_FALSE,
  USE_STATE
} from './actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  sort: '',
  filter: 'All',
  skip: 0,
  backFromSingleGame: false
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
		items: [],
        loading: true,
        error: null
      };
    case FETCH_PRODUCTS_SUCCESS:
    // When sucess
		return {
			...state,
			items: [...state.items, ...action.payload.products],
			skip: [...state.items, ...action.payload.products].length,
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
		case SET_PRODUCTS_TRUE:
			return {
				...state,
				backFromSingleGame: true
			};
		case SET_PRODUCTS_FALSE:
			return {
				...state,
				backFromSingleGame: false
			};
		case USE_STATE:
			return {
				...state,
				items: state.items,
				sort: state.sort,
				filter: state.filter,
				skip: state.skip,
				backFromSingleGame: false
			};

	    default:
	      return state;
	  }
}
