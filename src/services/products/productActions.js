//import {dummyData} from "../functions/dummyData";

import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './actionTypes';

const getProducts = () => {
  const url = "/api/games";
  return fetch(url)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};


const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/* FAKE_PRODUCTS
 const fakeGetProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({products: dummyData}), 500);
  });
};
*/


// Function for Fetching.
export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return getProducts()
      .then(json => {
        dispatch(fetchProductsSuccess(json));
        return json;
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error));
      });
  };
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
