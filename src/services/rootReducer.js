import {combineReducers} from "redux";

import products from "./products/productReducer";
import cart from './cart/cartReducer';

export default combineReducers({
  products,
  cart
});
