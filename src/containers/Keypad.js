import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pushDigit, pushOp } from '../actions';

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
        {this.createOpButton('=')}
      </div>
    </div>;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ pushDigit, pushOp }, dispatch);

const connector = connect(null, mapDispatchToProps);
export default connector(Keypad);
