import { combineReducers } from 'redux';

import { DIGIT, OP } from '../actions';

const cfsmState = (state = {}, action) => {
  switch (action.type) {
    case DIGIT:
      state.cfsm.toDigit(action.value);
      return Object.assign({}, state);
    case OP:
      state.cfsm.toOp(action.value);
      return Object.assign({}, state);
    default:
  }

  return state;
};

const rootReducer = combineReducers({ cfsmState });
export default rootReducer;
