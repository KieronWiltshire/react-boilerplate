/**
 * The initial state structure this specific reducer.
 */
const preloadedState = {
  isFetching: false,
  isAuthenticated: false,
  token: null,
  errors: [],
  email: null
};

/**
 * Reducer.
 */
export default function(state = (preloadedState), action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        email: action.email
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        token: action.token
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isFetching: action.isFetching,
        isAuthenticated: action.isAuthenticated,
        errors: action.errors
      };
    default:
      return { ...state };
  }
}
