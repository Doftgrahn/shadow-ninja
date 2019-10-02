import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FETCHQUERY,
  FETCH_PRODUCTS_FAILURE,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
  SET_PRODUCTS_TRUE,
  SET_PRODUCTS_FALSE,
  USE_STATE
} from "./actionTypes";
import {fetchDone} from '../infiniteScroll/scrollActions';
const getProducts = (skip, filter, sort) => {
  const url = `/api/games?skip=${skip}&find=${filter}&sort=${sort}`;
  return fetch(url)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};

// Fetch on scroll event
export const fetchProducts = (skip, filter, sort) => {
  return dispatch => {
    return getProducts(skip, filter, sort)
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
	  .then(dispatch(fetchDone()))
      .catch(error => {
        dispatch(fetchProductsFailure(error));
      });
  };
};

// fetch on launch and filter and sort
export const fetchProductsWithQuery = (skip, filter, sort) => {
	return dispatch => {
		dispatch(fetchProductsBegin());
		return getProducts(skip, filter, sort)
		.then(json => {
			dispatch(fetchProductsQuery(json, filter, sort));
			return json;
		})
		.then(dispatch(fetchDone()))
		.catch(error => {
			dispatch(fetchProductsFailure(error))
		});
	}
}

const handleErrors = response => {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
};

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {products}
});

export const fetchProductsQuery = (products, filter, sort) => ({
  type: FETCH_PRODUCTS_FETCHQUERY,
  payload: {products, filter, sort}
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: {error}
});

export const setSort = sort => ({
	type: SORT_PRODUCTS,
	payload: sort
})

export const setFilter = filter => ({
	type: FILTER_PRODUCTS,
	payload: filter
})

export const setGameStateTrue = () => ({
	type:SET_PRODUCTS_TRUE
})

export const setGameStateFalse = () => ({
	type:SET_PRODUCTS_FALSE
})

export const stateWithoutFetch = () => ({
	type:USE_STATE
})
