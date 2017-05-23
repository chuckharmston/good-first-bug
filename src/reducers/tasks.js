import {
  taskActionTypes as actionTypes,
  taskStatus as status
} from '../actions/tasks';

const initialState = {
  status: status.INIT,
  data: [],
  repos: [],
  skills: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TASKS_FETCH:
      return Object.assign({}, { status: status.PENDING });

    case actionTypes.TASKS_COMPLETE:
      return Object.assign({}, action.payload, { status: status.COMPLETE });

    case actionTypes.TASKS_ERROR:
      return Object.assign({}, { status: status.ERROR });

    default:
      return state;
  }
};
