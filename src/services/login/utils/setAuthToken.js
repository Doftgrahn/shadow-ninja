import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    console.log('im auth')
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    console.log('lost auth')
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
