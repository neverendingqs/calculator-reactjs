import { digits, ops } from 'calc-fsm/lib/enum';

const DIGIT = 'DIGIT';
const OP = 'OP';
const EQUALS = 'EQUALS';
const RESET = 'RESET';

const pushDigit = digit => ({ type: DIGIT, value: digit });
const pushEquals = () => ({ type: EQUALS });
const pushOp = op => ({ type: OP, value: op });
const reset = () =>({ type: RESET })

export {
  DIGIT,
  EQUALS,
  OP,
  RESET,

  digits,
  ops,

  pushDigit,
  pushEquals,
  pushOp,
  reset
}
