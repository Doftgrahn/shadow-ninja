import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../services/login/actions/authActions";
import { updateCurrency } from "../../services/login/actions/authActions";
import { updateGames } from "../../services/login/actions/authActions";


import PropTypes from "prop-types";
import GameLibrary from './gameLibrary';


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
    let url = this.props.auth.user.id
    let userData = this.props.auth.user
    let cart = this.props.cart
    let total = this.props.totalReducer
    this.props.updateGames(url, userData, cart, total)
  }


render() {
    const { user } = this.props.auth;

return (
      <div>
          <Fade>
        <div>
          <div>
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
            </h4>
            <h5>
              <b>Here is your currency: {user.currency}</b>
            </h5>
              <div>
                <b>Here is your gameLibrary</b>
                <div className='gameContainer'>
                  <GameLibrary />
                </div>
              </div>


            <button
              style={{ color: 'black' }}
              onClick={this.onLogoutClick}
            >
              Logout
            </button>


            <div>
              <button onClick={this.onUpdateClick} style={{ color: 'black' }} >Add currency</button>
              <button onClick={this.updateGameLibrary} style={{ color: 'black' }}>Add game</button>

            </div>
          </div>
        </div>
        </Fade>
      </div>
    );
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
});
export default connect(
  mapStateToProps,
  { logoutUser, updateCurrency, updateGames },
)(Profile);
