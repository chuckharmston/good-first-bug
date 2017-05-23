import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import filters from './filters';
import tasks from './tasks';

export default combineReducers({
  filters,
  tasks,
  routing
});
