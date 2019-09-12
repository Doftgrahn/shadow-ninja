import {combineReducers} from "redux";

import products from "./products/productReducer";
import cart from './cart/cartReducer';
import totalReducer from './total/totalReducer';

//AUTH
import authReducer from "./login/reducers/authReducers";
import errorReducer from "./login/reducers/errorReducers";
//AUTH

export default combineReducers({
  products,
  cart,
  auth: authReducer,
  errors: errorReducer,
  total: totalReducer
});
