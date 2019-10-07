export default class AuthenticationActionCreator {

  /**
   * Perform the login request.
   *
   * @param {string} args.email
   * @param {string} args.password
   */
  static loginRequestAction({ email, password }) {
    // TODO:

    return {
      type: 'LOGIN_REQUEST',
      isFetching: true,
      isAuthenticated: false,
      email
    };
  }

  static loginSuccessAction(token) {
    // TODO:

    return {
      type: 'LOGIN_SUCCESS',
      isFetching: false,
      isAuthenticated: true,
      token
    };
  }

  static loginFailedAction(errors) {
    // TODO:
    
    return {
      type: 'LOGIN_SUCCESS',
      isFetching: false,
      isAuthenticated: true,
      errors
    };
  }

}
