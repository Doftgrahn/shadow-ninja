import {
	FETCH_PRODUCT_BEGIN,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE
} from './singleProductActionsTypes';

const initialState = {
	item: [],
	loading: false,
	error: null
};

export default function productReducer(
	state = initialState,
	action
) {
	switch (action.type) {
		case FETCH_PRODUCT_BEGIN:
		// when loading
		return {
			loading: true,
			error: null
		};
		case FETCH_PRODUCT_SUCCESS:
		// When sucess
		return {
			...state,
			item: action.payload.singleProduct,
			loading: false,
			error: null
		};
		case FETCH_PRODUCT_FAILURE:
		// if failure
		return {
			...state,
			loading: false,
			error: action.payload.error,
			item: []
		};
		default: return state;
	}
}
