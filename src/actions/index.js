export const DIGIT = 'DIGIT';
export const OP = 'OP';

export const pushDigit = ({ digit }) => ({ type: DIGIT, digit });
export const pushOp = ({ op }) => ({ type: OP, op });
