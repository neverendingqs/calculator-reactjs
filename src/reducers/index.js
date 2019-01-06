import { combineReducers } from 'redux';

import { DIGIT, OP } from '../actions';

const cfsm = (state = {}, action) => {
  console.log(state)
  switch (action.type) {
    case DIGIT:
      state.toDigit(action.value);
      return Object.assign({}, state);
    case OP:
      state.toOp(action.value);
      return Object.assign({}, state);
    default:
  }

  return state;
};

const rootReducer = combineReducers({ cfsm });
export default rootReducer;
