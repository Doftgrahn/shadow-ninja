import {
	INFINITE_SCROLL_IN_PROGRESS,
	INFINITE_SCROLL_COMPLETE,
	INFINITE_SCROLL_ERROR
} from './actionTypes';

const initialState = {
	isFetching: false,
	error: null
}

export default function scrollReducer(
	state = initialState,
	action
){
	switch (action.type) {

		case INFINITE_SCROLL_IN_PROGRESS:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case INFINITE_SCROLL_COMPLETE:
			return {
				...state,
				isFetching: false,
				error: null
			}
		case INFINITE_SCROLL_ERROR:
			return {
				...state,
				error: action.payload.error
			}
		default:
			return state;
	}
}
