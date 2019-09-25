import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  UPDATE_USER_CURRENCY,
  UPDATE_USER_LIBRARY,
  CHANGE_PURCHASE_TRUE_FALSE
} from "./types";
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Update user currency ---------------------------------------------------------
export const updateCurrency = (url, userData, amountToAdd, amountToLower) => dispatch => {
  if (amountToAdd) {
    userData.currency = userData.currency + amountToAdd
  }
  if(amountToLower) {
    userData.currency = userData.currency - amountToLower
  }

  dispatch(setUserCurrency(userData))

  postData(`http://localhost:3000/api/addcurrency?id=${url}`)
  .then(res => {
  })
  .catch(error => {console.error(error)});

  function postData(url = '') {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => console.log('final resp', response.json()));
  }
};
//Update user currency --------------------------------------------------------

//Update user library
export const updateGames = (url, userData, cart, total, isPurchaseValid) => dispatch => {
  let amountToLower = 0;
  let amountToAdd = false;
  let newPurchaseValid = isPurchaseValid;

  cart.forEach(game => {
    let number = parseInt(game.price)
    amountToLower += number
    if(game.quantity > 1) {
      console.log('Dont buy 2 copies of the same game! stupido!, change state to buy invalid')
      newPurchaseValid = false;
    } else {
      if( userData.gameLibrary.find(obj => obj.title === game.title)) {
        console.log('game exists, change state to buy invalid')
        newPurchaseValid = false;
      } else {
        console.log('game is ok to buy!')
      }

    }

  });

  if(userData.currency < amountToLower || newPurchaseValid !== true) {
    console.log('change state to not enough currency or newPurchaseValid = false')
    return;
  } else {
    console.log('buying game')
    let newData = {
      ...userData,
      gameLibrary: [...userData.gameLibrary, ...cart]
    }

    dispatch(changePurchase(newPurchaseValid))
    dispatch(setUserGames(newData))
    dispatch(updateCurrency(url, newData, amountToAdd, amountToLower))


    // Total price is the amount to cut from the userData.currency
    postData(`http://localhost:3000/api/addGameLibrary?id=${url}`)
      .then(res => {
        })
        .catch(error => {console.error(error)});
        function postData(url = '') {
          return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(cart), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
            .then(response => console.log('final resp', response.json()));
        }
    };



};

//Update user library








// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// updateUserCurrency
export const setUserCurrency = userData => {
  return {
    type: UPDATE_USER_CURRENCY,
    payload: userData
  };
};

export const setUserGames = userData => {
  return {
    type: UPDATE_USER_LIBRARY,
    payload: userData
  };
};

export const changePurchase = newPurchaseValid => {
  console.log('inside change',newPurchaseValid)
  return {
    type: CHANGE_PURCHASE_TRUE_FALSE,
    payload: newPurchaseValid
  }
}


// updateUserCurrency
// Log user out
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
