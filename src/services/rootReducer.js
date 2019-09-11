import {combineReducers} from "redux";

import products from "./products/productReducer";
import cart from './cart/cartReducer';
import totalReducer from './total/totalReducer';

export default combineReducers({
  products:products,
  cart: cart,
  total: totalReducer
});
