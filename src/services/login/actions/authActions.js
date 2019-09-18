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


  postData(`http://localhost:3000/api/addcurrency?id=${url}`)
  .then(res => {
    dispatch(setUserCurrency(userData))
  })
  .catch(error => {console.error(error)});

  function postData(url = '') {
    return fetch(url, {
      method: 'PUT',
    })
    .then(response => console.log('final resp', response.json()));
  }
};
//Update user currency --------------------------------------------------------

//Update user library
export const updateGames = (url, userData, cart, total) => dispatch => {
  let amountToLower = 0;
  let amountToAdd = false;
  console.log('this is cart', cart)
  console.log('this is userData', userData)
  console.log('this is total', total)

  // cart.forEach(game => {
  //   let number = parseInt(game.price)
  //   amountToLower += number
  // });
  //
  // console.log()
  // let newCart = cart.map(game => {
  //   return game
  // })
  let library = userData.gameLibrary
  let newData = {
    ...userData,
    gameLibrary: [...library, ...cart]
  }
  console.log(newData)
  // console.log('this is newCart', newCart)
    dispatch(setUserGames(newData))

  // Total price is the amount to cut from the userData.currency
  // dispatch(setUserCurrency(userData))


  // postData(`http://localhost:3000/api/addGameLibrary?id=${url}`)
  // .then(res => {
  //   dispatch(updateCurrency(url, userData, amountToAdd, amountToLower))
  //   // dispatch changes to state with new games in librarby
  // })
  // .catch(error => {console.error(error)});
  // function postData(url = '') {
  //   return fetch(url, {
  //     method: 'PUT',
  //     body: JSON.stringify(cart), // data can be `string` or {object}!
  //     headers:{
  //     'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => console.log('final resp', response.json()));
  // }
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
