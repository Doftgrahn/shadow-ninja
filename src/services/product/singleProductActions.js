import {
	FETCH_PRODUCT_BEGIN,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE
}  from './singleProductActionsTypes';

const getSingleProduct = (productId) => {
	const url = `/api/games/product?id=${productId}`;
	return fetch(url)
		.then(handleErrors)
		.then(res => {
			return res.json()
		});
}
// gets fetch call from game component with param match.param.id
export const fetchSingleProduct = (data) => {
	return dispatch => {
		dispatch(fetchSingleProductBegin());
		return getSingleProduct(data)
			.then(json => {
				dispatch(fetchSingleProductSucess(json))
				return json;
			})
			.catch(error => {
				dispatch(fetchSingleProductFailure(error));
			})
	}
};

const handleErrors = response => {
	if(!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};

export const fetchSingleProductBegin = () => ({
	type: FETCH_PRODUCT_BEGIN
});

export const fetchSingleProductSucess = (singleProduct) => ({
	type: FETCH_PRODUCT_SUCCESS,
	payload: {singleProduct}
})

export const fetchSingleProductFailure = (error) => ({
	type: FETCH_PRODUCT_FAILURE,
	payload: {error}
})
