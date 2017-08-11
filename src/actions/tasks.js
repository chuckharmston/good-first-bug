const TASKS_FETCH = 'TASKS_FETCH';
const TASKS_COMPLETE = 'TASKS_COMPLETE';
const TASKS_ERROR = 'TASKS_ERROR';

const INIT = 'INIT';
const PENDING = 'PENDING';
const COMPLETE = 'COMPLETE';
const ERROR = 'ERROR';

const fetchTasks = () => ({
  type: TASKS_FETCH
});

const completeTasks = payload => {
  return {
    type: TASKS_COMPLETE,
    payload
  };
};

const errorTasks = () => {
  return {
    type: TASKS_ERROR
  };
};

export const taskActions = { fetchTasks, completeTasks, errorTasks };
export const taskActionTypes = { TASKS_FETCH, TASKS_COMPLETE, TASKS_ERROR };
export const taskStatus = { INIT, PENDING, COMPLETE, ERROR };
