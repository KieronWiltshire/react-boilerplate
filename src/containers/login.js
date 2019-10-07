import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/forms/login-form';
import Authentication from '../actions/authentication';

const Login = connect((state) => {
  return {
    authentication: state.authentication
  };
}, (dispatch) => {
  return {
    loginRequestAction: ({ email, password }) => { dispatch(Authentication.loginRequestAction({ email, password })); }
  };
})(class extends Component {

  /**
   * Render the {React} component.
   *
   * @returns {void}
   */
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.props.loginRequestAction} />
      </div>
    );
  }

});

export default Login;
