import React from 'react';


import {BrowserRouter as Router} from "react-router-dom";

import './styles/main.scss';


//Authentication
import store from "./services/store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./services/login/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./services/login/actions/authActions";
// import { Provider } from "react-redux";

//Authentication

//import styles

//Header and Footer
import Header from './containers/general/header/header';
import Footer from './containers/general/footer/footer';
// That small weird meny, contains shopping cart and recieved messages.

import MiniMeny from './components/miniMeny/miniMeny';
//Routes
import Routes from './routes/routes';


/*Refactor later!*/

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  setCurrentUser(decoded);
// Check for expired token
  const currentTime = Date.now() / 1000000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
/*Refactor later!*/

const App = () => {
    return (<div className="App">
        <Router>
            <MiniMeny/>
            <Header/>
            <main className="route_wrapper">
                <Routes/>
            </main>
            <Footer/>
        </Router>
    </div>);
}

export default App;
