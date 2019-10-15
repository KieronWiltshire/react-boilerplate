import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import mouseReducer from './mouse-reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  mouse: mouseReducer
});
