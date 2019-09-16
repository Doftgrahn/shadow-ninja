import {combineReducers} from "redux";

import products from "./products/productReducer";
import singleProduct from "./product/singleProductReducer";
import cart from "./cart/cartReducer";
import totalReducer from "./total/totalReducer";

export default combineReducers({
  products: products,
  singleProduct: singleProduct,
  cart: cart,
  total: totalReducer
});
