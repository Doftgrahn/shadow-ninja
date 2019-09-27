import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./actionTypes";

const getUsers = () => {
  const url = "/api/getusers/";
  return fetch(url)
    .then(handleErrors)
    .then(res => {
      return res.json();
    });
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return getUsers()
      .then(json => {
        dispatch(fetchUsersSuccess(json));
        return json;
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = products => ({
  type: FETCH_USERS_SUCCESS,
  payload: {products}
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: {error}
});
