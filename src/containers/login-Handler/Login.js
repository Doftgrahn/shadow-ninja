import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../services/login/actions/authActions";
import classnames from "classnames";

import Fade from 'react-reveal/Fade';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }




  goBack = () =>  this.props.history.goBack()

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/userProfile"); // push user to profile when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

render() {
    const { errors } = this.state;

return (
  <div className="LogInWrapper">
      <Fade>
      <div className="inerWrapper">
          <div className="inerOfInerWrapper">

            <div>
              <h2>
                Login
              </h2>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div>
                <input
                  placeholder="Email"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                  })}
                />
                <br/>
                <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
                </span>
              </div>
              <div>
                <input
                  placeholder="Password"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  autoComplete="on"
                  className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                }) }
                />
                <br/>
                <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
                </span>
              </div>
              <div>
                <button type="submit">
                  Login
                </button>
              </div>
              </form>
              <div className="dontHaveLogin">
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                  <button className="goBackBtn" onClick={this.goBack}>
                    Go Back
                  </button>
              </div>
          </div>
        </div>
        </Fade>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
