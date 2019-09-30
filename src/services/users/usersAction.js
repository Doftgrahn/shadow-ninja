import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./actionTypes";

const getUsers = () => {
  const url = "/api/allusers/";
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
        return dispatch(fetchUsersSuccess(json));
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

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: {users}
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: {error}
});
