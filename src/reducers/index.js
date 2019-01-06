import { combineReducers } from 'redux';

import { DIGIT } from '../actions';
import { OP } from '../actions';

const cfsm = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case DIGIT:
      state.cfsm.toDigit(action.digit);
      return Object.assign({}, state, { cfsm: state.csfm });
    case OP:
      state.csfm.toOp(action.op);
      return Object.assign({}, state, { cfsm: state.csfm });
    default:
      return state;
  }
};


const rootReducer = combineReducers({ cfsm });
export default rootReducer;
