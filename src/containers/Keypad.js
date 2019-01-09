import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pushDigit, pushEquals, pushOp, reset } from '../actions';

class Keypad extends Component {
  createOpButton(op) {
    return <button
      key={`input_${op}`}
      type='button'
      onClick={() => this.props.pushOp(op)}
    >{op}</button>;
  }

  createDigitButton(digit) {
    return <button
      key={`input_${digit}`}
      type='button'
      onClick={() => this.props.pushDigit(digit)}
    >{digit}</button>;
  }

  createEqualButton() {
    return <button
      key={`input_=`}
      type='button'
      onClick={() => this.props.pushEquals()}
    >=</button>;
  }

  createResetButton() {
    return <button
      key={`input_c`}
      type='button'
      onClick={() => this.props.reset()}
    >c</button>;
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
        {this.createResetButton()}
        {this.createDigitButton(0)}
        {this.createEqualButton()}
      </div>
    </div>;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { pushDigit, pushOp, pushEquals, reset },
  dispatch
);

const connector = connect(null, mapDispatchToProps);
export default connector(Keypad);
