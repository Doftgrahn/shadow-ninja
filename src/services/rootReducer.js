import {combineReducers} from "redux";

// Store and Checkout
import products from "./products/productReducer";
import cart from "./cart/cartReducer";

// Gives Total value and Quantity, used in USEEFFECT on render in MiniMeny. Also is used in Checkout
import totalReducer from "./total/totalReducer";

//AUTH
import authReducer from "./login/reducers/authReducers";
import errorReducer from "./login/reducers/errorReducers";
//AUTH

export default combineReducers({
  products: products,
  cart: cart,
  total: totalReducer,
  auth: authReducer,
  errors: errorReducer
});
