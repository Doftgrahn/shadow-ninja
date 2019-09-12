import {ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_PRODUCTS} from "./actionTypes";


// initialState, empty array.
const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      //Find id of product. Find returns the first array, use FILTER otherwise.
      const product = state.find(el => el._id === action.payload._id);

      if (product) {
        // if it already exists in the state, it will get quantity: quantity + 1.
        return state.map(p => {
          if (p._id === action.payload._id)
            return {...p, quantity: p.quantity + 1};
          // wil otherwise return rest of thev array, if nothing matches
          else return p;
        });
        // If product doesn't exists in state yet, it will be added and get quantity: 1
      } else {
        return [...state, {...action.payload, quantity: 1}];
      }

    case REMOVE_PRODUCT:
      // state contains an _id of matching action.payload._id, that _id will be removed.
      // I used filter to make a new array, not modify the old one.
      let newArray = state.filter(game => game._id !== action.payload._id);
      return newArray;

    // This one clears the whole state, Is at the moment being used for development reasons.
    //Will problably be removed closer to production.
    case CLEAR_PRODUCTS:
      return [];

    // Returns default state.
    default:
      return state;
  }
}
