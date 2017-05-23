import { go } from 'react-router-redux';
import URI from 'urijs';

const FILTER_CHANGE_REPO = 'FILTER_CHANGE_REPO';
const FILTER_CHANGE_SKILL = 'FILTER_CHANGE_SKILL';

const filterChangeRepo = payload => ({
  type: FILTER_CHANGE_REPO,
  payload
});

const filterChangeSkill = payload => ({
  type: FILTER_CHANGE_SKILL,
  payload
});

const filterSet = opts => dispatch => {
  dispatch(filterChangeRepo(opts.repo || null));
  dispatch(filterChangeSkill(opts.skill || null));

  const next = new URI('/tasks/').query(opts).toString();
  dispatch(go(next));
  window.scrollTo(0, 0);
};

export const filterActions = { filterChangeRepo, filterChangeSkill, filterSet };
export const filterActionTypes = { FILTER_CHANGE_REPO, FILTER_CHANGE_SKILL };
