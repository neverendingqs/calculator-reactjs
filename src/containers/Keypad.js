import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pushDigit, pushOp, pushEquals, digits, ops } from '../actions';

const digitsToSymbol = {
  0: digits.ZERO,
  1: digits.ONE,
  2: digits.TWO,
  3: digits.THREE,
  4: digits.FOUR,
  5: digits.FIVE,
  6: digits.SIX,
  7: digits.SEVEN,
  8: digits.EIGHT,
  9: digits.NINE
};

const opsToSymbol = {
  '+': ops.ADD,
  '-': ops.SUBTRACT,
  'x': ops.MULTIPLY,
  '÷': ops.DIVIDE
};

class Keypad extends Component {
  createOpButton(op) {
    return <button
      key={`input_${op}`}
      type='button'
      onClick={() => this.props.pushOp(opsToSymbol[op])}
    >{op}</button>;
  }

  createDigitButton(digit) {
    return <button
      key={`input_${digit}`}
      type='button'
      onClick={() => this.props.pushDigit(digitsToSymbol[digit])}
    >{digit}</button>;
  }

  createEqualButton() {
    return <button
      key={`input_=`}
      type='button'
      onClick={() => this.props.pushEquals()}
    >=</button>;
  }

  render() {
    return <div>
      <div className="row">
        {this.createOpButton('÷')}
        {this.createDigitButton(7)}
        {this.createDigitButton(8)}
        {this.createDigitButton(9)}
      </div>
      <div className="row">
        {this.createOpButton('x')}
        {this.createDigitButton(4)}
        {this.createDigitButton(5)}
        {this.createDigitButton(6)}
      </div>
      <div className="row">
        {this.createOpButton('-')}
        {this.createDigitButton(1)}
        {this.createDigitButton(2)}
        {this.createDigitButton(3)}
      </div>
      <div className="row">
        {this.createOpButton('+')}
        {this.createOpButton('c')}
        {this.createDigitButton(0)}
        {this.createEqualButton()}
      </div>
    </div>;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ pushDigit, pushOp, pushEquals }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(Keypad);
