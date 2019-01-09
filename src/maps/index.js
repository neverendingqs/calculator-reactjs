import cfsmEnum from 'calc-fsm/lib/enum';

// https://stackoverflow.com/a/46582758
function invert(o) {
  return Object.assign(
    {},
    ...Object
      .entries(o)
      .map(([k,v]) => ({ [v]: k })))
}

const { digits: cfsmDigits, ops: cfsmOps } = cfsmEnum;

const digitToCfsmDigit = {
  0: cfsmDigits.ZERO,
  1: cfsmDigits.ONE,
  2: cfsmDigits.TWO,
  3: cfsmDigits.THREE,
  4: cfsmDigits.FOUR,
  5: cfsmDigits.FIVE,
  6: cfsmDigits.SIX,
  7: cfsmDigits.SEVEN,
  8: cfsmDigits.EIGHT,
  9: cfsmDigits.NINE
};

const opToCfsmOp = {
  '+': cfsmOps.ADD,
  '-': cfsmOps.SUBTRACT,
  'x': cfsmOps.MULTIPLY,
  '÷': cfsmOps.DIVIDE
};

const cfsmDigitToDigit = invert(digitToCfsmDigit);
const cfsmOpToOp = invert(opToCfsmOp);

export {
  digitToCfsmDigit,
  opToCfsmOp,
  cfsmDigitToDigit,
  cfsmOpToOp
}
