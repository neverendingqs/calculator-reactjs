import { combineReducers } from 'redux';

import { DIGIT, EQUALS, OP, RESET } from '../actions';
import { digitToCfsmDigit, opToCfsmOp, cfsmDigitToDigit, cfsmOpToOp } from '../maps'

function cfsmHistoryToHistory(cfsmHistory) {
  return cfsmHistory
    .map(state => cfsmDigitToDigit[state] || cfsmOpToOp[state]);
}

const cfsmState = (state = {}, action) => {
  switch (action.type) {
    case DIGIT:
      const digit = digitToCfsmDigit[action.value];
      state.cfsm.toDigit(digit);
      return Object.assign({}, state, { result: cfsmHistoryToHistory(state.cfsm.history) });

    case EQUALS:
      return Object.assign({}, state, { result: state.cfsm.calculate() });

    case OP:
      const op = opToCfsmOp[action.value];
      state.cfsm.toOp(op);
      return Object.assign({}, state, { result: cfsmHistoryToHistory(state.cfsm.history) });

    case RESET:
      state.cfsm.reset();
      return Object.assign({}, state, { result: 0 });

    default:
      return state;
  }
};

const rootReducer = combineReducers({ cfsmState });
export default rootReducer;
