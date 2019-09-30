import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FETCHQUERY,
  FETCH_PRODUCTS_FAILURE,
  SORT_PRODUCTS,
  FILTER_PRODUCTS
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

// Function for Fetching.
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

export const fetchProductsWithQuery = (skip, filter, sort) => {
	return dispatch => {
		dispatch(fetchProductsBegin());
		return getProducts(skip, filter, sort)
		.then(json => {
			dispatch(fetchProductsQuery(json));
			return json;
		})
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

export const fetchProductsQuery = (products) => ({
  type: FETCH_PRODUCTS_FETCHQUERY,
  payload: {products}
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
