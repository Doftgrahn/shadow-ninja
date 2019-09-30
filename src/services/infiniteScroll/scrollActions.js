import {
	INFINITE_SCROLL_IN_PROGRESS,
	INFINITE_SCROLL_COMPLETE,
	INFINITE_SCROLL_ERROR
} from './actionTypes';

export const changeFetchState = () => {

		return dispatch => {
			dispatch(scrollFetchBegin())
		}
	}

	export const fetchDone = () => {
		return dispatch => {
			dispatch(scrollFetchSuccsess())
		}
	}



export const scrollFetchBegin = () => ({
	type: INFINITE_SCROLL_IN_PROGRESS
});

export const scrollFetchSuccsess = () => ({
	type: INFINITE_SCROLL_COMPLETE
})
export const scrollFetchError = error => ({
	type: INFINITE_SCROLL_ERROR,
	payload: {error}
})
