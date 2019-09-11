import {compose, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

//export const store = createStore(rootReducer, applyMiddleware(thunk));

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem("state")) || initialState;
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      products: state.products,
      cart: state.cart,
      total: state.total
    };
    window.localStorage.setItem("state", JSON.stringify(persist));
  });
  return store;
};
