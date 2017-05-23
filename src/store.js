import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import GitHubService from './github';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const browserHistory = createHistory();
const middleware = [
  GitHubService.middleware,
  thunk,
  routerMiddleware(browserHistory)
];

export default history => {
  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
  );
};
