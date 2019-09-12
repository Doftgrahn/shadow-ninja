import {ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCTS} from "./actionTypes";

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const clearProducts = products => ({
  type: CLEAR_PRODUCTS,
  payload: products
});
