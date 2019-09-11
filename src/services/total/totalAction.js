import {UPDATE_CART} from "./actionTypes";

export const updateCart = cartProducts => dispatch => {

  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
},0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let installements = cartProducts.preduce((greater, p) => {
    greater = p.installements > greater ? p.installements : greater;
    return greater;
  });

  let cartTotal = {
    productQuantity,
    installements,
    totalPrice
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
