import {UPDATE_CART} from "./actionTypes";

export const updateCart = cartProducts => dispatch => {

  const productQuantity = cartProducts
    .map(game => game.quantity)
    .reduce((biggest, b) => biggest + b, 0);

  const totalPrice = cartProducts
    .map(game => game.price * game.quantity)
    .reduce((sum, p) => sum + p, 0);

  const cartTotal = {
    productQuantity,
    totalPrice
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
