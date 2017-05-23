import { filterActionTypes as actionTypes } from '../actions/filters';

const initialState = {
  repo: null,
  skill: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_CHANGE_REPO:
      return Object.assign({}, state, { repo: action.payload });

    case actionTypes.FILTER_CHANGE_SKILL:
      return Object.assign({}, state, { skill: action.payload });

    case actionTypes.TASKS_ERROR:
      return Object.assign({}, initialState);

    default:
      return state;
  }
};
