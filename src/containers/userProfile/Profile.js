import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../services/login/actions/authActions";
import PropTypes from "prop-types";
import GameLibrary from './gameLibrary'
class Profile extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    console.log(this.props)
return (
      <div>
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
                <GameLibrary />
              </div>


            <button
              onClick={this.onLogoutClick}
            >
              Logout
            </button>


            <div>
              <button style={{ color: 'black' }}>Click me to add currency to your account</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Profile);
