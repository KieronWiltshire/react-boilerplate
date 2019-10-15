import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { default as store, history } from './store';
import registerServiceWorker from './register-service-worker';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Route } from 'react-router';
import "./styles/tailwind.out.css"

import App from './containers/app';
import MouseTracker from './containers/mouse-tracker';

import './vendor';

/** /
 * |
 * | Application Router.
 * | -------------------------------------
 * | This is the client application router. Here the application
 * | routes are defined which are responsible for navigating
 * | around the application itself.
 * |
 */
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/mouse" component={MouseTracker} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
