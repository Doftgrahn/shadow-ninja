import {ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCTS, SUB_QUANT} from "./actionTypes";


// Action for adding products.
export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});


// Reducer for removing product.
export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});


// function for clearing ALL product, at checkout.
export const clearProducts = products => ({
  type: CLEAR_PRODUCTS,
  payload: products
});

export const subQuant = product => ({
    type: SUB_QUANT,
    payload: product
})
