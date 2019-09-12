import {ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCTS} from "./actionTypes";

const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      //Find id of product
      const product = state.find(el => el._id === action.payload._id);
      if (product) {
        // det finns redan minst en produkt i kundvagnen lägg till quantity.
        return state.map(p => {
          if (p._id === action.payload._id)
            return {...p, quantity: p.quantity + 1};
          else return p;
        });
      } else {
        return [...state, {...action.payload, quantity: 1}];
      }

    case REMOVE_PRODUCT:
      let newArray = state.filter(game => game._id !== action.payload._id);
      return newArray;
      
    case CLEAR_PRODUCTS:
      return [];

    default:
      return state;
  }
}
