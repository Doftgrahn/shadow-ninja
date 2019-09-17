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
export const updateCurrency = (url, userData) => dispatch => {
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
export const updateGames = (url, userData) => dispatch => {
  postData(`http://localhost:3000/api/addcurrency?id=${url}`)
  .then(res => {
    console.log('do i run?')
    dispatch(setUserGames(userData))
  })
  .catch(error => {console.error(error)});

  function postData(url = '') {
    return fetch(url, {
      method: 'PUT',
    })
    .then(response => console.log('final resp', response.json()));
  }
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
  console.log('this is newCurrency', userData)
  userData.currency = 20000
  return {
    type: UPDATE_USER_CURRENCY,
    payload: userData
  };
};

export const setUserGames = userData => {
  console.log('this is newCurrency', userData)

  return {
    type: UPDATE_USER_CURRENCY,
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
