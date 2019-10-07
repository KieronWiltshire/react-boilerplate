import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default createStore(createRootReducer(history), composeWithDevTools(
  applyMiddleware(promise, thunk, logger, routerMiddleware(history))
));
