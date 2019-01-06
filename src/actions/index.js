import { digits, ops, END } from 'calc-fsm/lib/enum';

const DIGIT = 'DIGIT';
const OP = 'OP';
const EQUALS = 'EQUALS';

const pushDigit = digit => ({ type: DIGIT, value: digit });
const pushOp = op => ({ type: OP, value: op });
const pushEquals = () => ({ type: EQUALS, value: END });

export {
  DIGIT,
  OP,
  EQUALS,

  digits,
  ops,

  pushDigit,
  pushOp,
  pushEquals
}
