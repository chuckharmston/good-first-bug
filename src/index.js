import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import URI from 'urijs';

import App from './containers/app';
import { filterActions } from './actions/filters';
import { taskActions } from './actions/tasks';
import createStore from './store';

const history = createHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

const uri = new URI(document.location);
if (uri.pathname() === '/tasks/') {
  const qs = uri.search(true);
  if (qs.repo) {
    store.dispatch(filterActions.filterChangeRepo(qs.repo));
  }
  if (qs.skill) {
    store.dispatch(filterActions.filterChangeSkill(qs.skill));
  }
}

store.dispatch(taskActions.fetchTasks());
