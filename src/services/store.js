import {compose, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

export default initialState => {
  // checks if state exists  in localStorage
  initialState =
    JSON.parse(window.localStorage.getItem("state")) || initialState;

  const middleware = [thunk];

  // Creates the store, includes rootReducer, initialState and middleware(..thunk).
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // Listens to changes in state, saves in localStorage.
  store.subscribe(() => {
    const state = store.getState();


    // States that will be saved in localStorage. Add your state here, if you want it to be saved.
    const persist = {
      cart: state.cart,
      total: state.total,
      auth: state.auth,
     // chat:state.chat
    };
	window.localStorage.setItem("state", JSON.stringify(persist));

});


  return store;
};
