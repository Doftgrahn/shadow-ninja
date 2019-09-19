import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  UPDATE_USER_CURRENCY,
  UPDATE_USER_LIBRARY
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
export const updateGames = (url, userData, cart, total) => dispatch => {
  let amountToLower = 0;
  let amountToAdd = false;

  cart.forEach(game => {
    let number = parseInt(game.price)
    amountToLower += number
  });
  console.log(amountToLower)
  console.log(userData.currency)
  if(userData.currency < amountToLower) {
    console.log('not enough dineros!')
    //DO somthing if users currency is to low
    return;
  } else {
    let newData = {
      ...userData,
      gameLibrary: [...userData.gameLibrary, ...cart]
    }

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


// updateUserCurrency
// Log user out
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
