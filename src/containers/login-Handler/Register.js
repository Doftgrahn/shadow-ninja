import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../services/login/actions/authActions";
import classnames from "classnames";

import Fade from 'react-reveal/Fade';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  goBack = () =>  this.props.history.goBack()


  UNSAFE_componentWillReceiveProps(nextProps) {
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
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      currency: 1000,
      gameLibrary: []




    };

this.props.registerUser(newUser, this.props.history);
  };

render() {
    const { errors } = this.state;

return (
      <div className="regWrapper">
          <Fade>
        <div className="inerRegWrapper">
          <div>
          <h2>
            Register
          </h2>
            <form noValidate onSubmit={this.onSubmit}>
              <div>
                <input
                  placeholder='Enter your name'
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                  invalid: errors.name
                  })}
                />
                <br/>
                <span className="red-text">{errors.name}</span>
              </div>
              <div>
                <input
                  placeholder='Enter a valid Email'
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                  invalid: errors.email
                  })}
                />
                <br/>
                <span className="red-text">{errors.email}</span>
              </div>
              <div>
                <input
                  placeholder='Enter Password'
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  autoComplete="on"
                  className={classnames("", {
                  invalid: errors.password
                  })}
                />
                <br/>
                <span className="red-text">{errors.password}</span>
              </div>
              <div>
                <input
                  placeholder='Confirm Password'
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  autoComplete="on"
                  className={classnames("", {
                  invalid: errors.password2
                  })}
                />
                <br/>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div>
                <button type="submit">
                  Sign up
                </button>
              </div>
            </form>
            <div className="logIn">
            <p>
            Already have an account? <Link to="/login">Login</Link>
            </p>
            <button onClick={this.goBack} className="goBackBtn">
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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});



export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
