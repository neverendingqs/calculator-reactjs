import { combineReducers } from 'redux';

import { DIGIT, OP, EQUALS } from '../actions';

const cfsmState = (state = {}, action) => {
  switch (action.type) {
    case DIGIT:
      state.cfsm.toDigit(action.value);
      return Object.assign({}, state, { result: state.cfsm.history.join('') });
    case OP:
      state.cfsm.toOp(action.value);
      return Object.assign({}, state, { result: state.cfsm.history.join('') });
    case EQUALS:
      return Object.assign({}, state, { result: state.cfsm.calculate() });
    default:
  }

  return state;
};

const rootReducer = combineReducers({ cfsmState });
export default rootReducer;
