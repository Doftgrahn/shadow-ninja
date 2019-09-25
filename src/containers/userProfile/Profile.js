import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../services/login/actions/authActions";
import { updateCurrency } from "../../services/login/actions/authActions";
import { updateGames } from "../../services/login/actions/authActions";
import { Redirect} from "react-router-dom";

import PropTypes from "prop-types";
import GameLibrary from './gameLibrary';

import { ReactComponent as Profileimg } from './user.svg';

import Fade from 'react-reveal/Fade';


class Profile extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onUpdateClick = e => {
    let url = this.props.auth.user.id
    let userData = this.props.auth.user
    let amountToAdd = 20000;
    this.props.updateCurrency(url, userData, amountToAdd)
  }

  updateGameLibrary = () => {
    let url = this.props.auth.user.id;
    let userData = this.props.auth.user;
    let cart = this.props.cart;
    let total = this.props.totalReducer;
    let isPurchaseValid = this.props.auth.isPurchaseValid;
    this.props.updateGames(url, userData, cart, total, isPurchaseValid)
  }


render() {
    const { user } = this.props.auth;
    let profile;

    if (this.props.auth.isAuthenticated ) {
      profile =
                <Fade>
                  <div className="userMainContent">
                    <div className="userStatus">
                      <Profileimg className="userImg"/>
                      <p className="helloUser">
                        Hey there, <b>{user.name.split(" ")[0]}</b>
                      </p>
                      <b>Your currency: {user.currency}</b>
                      <ul>display more info below --
                        <li>Member since - 2018</li>
                          <ul>Friends
                            <li>sven</li>
                            <li>anders</li>
                            <li>karl</li>
                          </ul>
                      </ul>
                      <button onClick={this.onUpdateClick} className="addcurrency" >Add currency</button>
                      <button style={{ color: 'black' }} onClick={this.onLogoutClick}>
                        Logout
                      </button>
                  </div>
                  <div className="userGames">
                    <p><b>Your games</b></p>
                    <div className='gameContainer'>
                      <GameLibrary />
                    </div>
                  </div>
                </div>
                  <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
                </Fade>
    } else {
      profile = <Redirect to="/" />
    }

    return (
      <div>{profile}</div>
    )
  }
}






Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart,
  total: state.totalReducer,
  isPurchaseValid: state.isPurchaseValid,
});
export default connect(
  mapStateToProps,
  { logoutUser, updateCurrency, updateGames },
)(Profile);
