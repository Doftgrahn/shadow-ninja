import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SORT_PRODUCTS
} from "./actionTypes";

const getProducts = (sort) => {
  const url = `/api/games?find=${'all'}&filter=${sort}`;
  return fetch(url)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};


// Function for Fetching.
export const fetchProducts = (sort) => {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return getProducts(sort)
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

const handleErrors = response => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {products}
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: {error}
});

export const setFilter = sort => ({
		type: SORT_PRODUCTS,
		payload: sort
})
