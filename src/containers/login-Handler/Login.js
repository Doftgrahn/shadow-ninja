import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../services/login/actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

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
    const colorDark = {
      color: 'black'
    }
return (
  <div className="LogInWrapper">
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
                  placeHolder="Email"
                  style={colorDark}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                  invalid: errors.email || errors.emailnotfound
                  })}
                />

                <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
                </span>
              </div>
              <div>
                <input
                  placeHolder="Password"
                  style={colorDark}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect
                }) }
                />

                <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
                </span>
              </div>
              <div>
                <button type="submit" style={colorDark}>
                  Login
                </button>
              </div>
              </form>
              <div className="dontHaveLogin">
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                  <Link to="/">
                    <i>Back to home</i>
                  </Link>
              </div>
          </div>
        </div>
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
