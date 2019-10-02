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
	backFromSingleGame: false,
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
		// skapa ny array som använder SORT och FILTER för att göra rätt sortering och filtrering
		//action.sort
		//action.filter
		return {
			...state,
			items: applySortAndFilter(action.payload.products, action.payload.sort, action.payload.filter),
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
			backFromSingleGame: false,
			sort: action.payload
		};
		case FILTER_PRODUCTS:
		return {
			...state,
			backFromSingleGame: false,
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

function applySortAndFilter(array, sort, filter) {



	if( filter !== 'All' ) {
		array = array.filter(game => game.category === filter);
		return array;
	}
	array = [...array].sort((x, y) => {
		if( sort === 'lowestPrice' ) {
			if( x.lowestPrice < y.lowestPrice ) return -1;
			else if( x.lowestPrice > y.lowestPrice ) return 1;
			else return 0;
		} else if( sort === 'highestPrice' ) {
			if( x.highestPrice < y.highestPrice ) return 1;
			else if( x.highestPrice > y.highestPrice ) return -1;
			else return 0;
		} else if (sort === 'lowestRating') {
			if(x.lowestRating <  y.lowestRating) return -1;
			else if	( x.lowestRating > y.lowestRating ) return 1;
			else return 0;
		} else if (sort === 'highestRating') {
			if(x.highestRating <  y.highestRating) return 1;
			else if	( x.highestRating > y.highestRating ) return -1;
			else return 0;
		}
		return array
	})
	return array;
}
