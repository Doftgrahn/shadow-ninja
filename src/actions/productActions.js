import {dummyData} from "../functions/dummyData";

import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "./constants";


const getProducts = () => {
    const url = "http://localhost:1337";
 // const url = "/api/games";
  return fetch(url)
    .then(handleErrors)
    .then(res => res.json()
    );
};

/*
 const fakeGetProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve({products: dummyData}), 500);
  });
};

*/

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return getProducts()
      .then(json => {
        dispatch(fetchProductsSuccess(json.products));
        console.log(json);
        return json.products;
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
