import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pushDigit, pushEquals, pushOp, reset } from '../actions';

const rowStyle = {
  justifyContent: 'center',
  alignItems: 'center'
};

const letterStyle = {
  fontSize: '2.5rem',
  height: '5rem',
  margin: '0.05rem',
  width: '5rem'
};

class Keypad extends Component {
  createOpButton(op) {
    return <button
      className="btn btn-dark"
      key={`input_${op}`}
      style={letterStyle}
      type='button'
      onClick={() => this.props.pushOp(op)}
    >{op}</button>;
  }

  createDigitButton(digit) {
    return <button
      className="btn btn-secondary"
      key={`input_${digit}`}
      style={letterStyle}
      type='button'
      onClick={() => this.props.pushDigit(digit)}
    >{digit}</button>;
  }

  createEqualButton() {
    return <button
      className="btn btn-success"
      key={`input_=`}
      style={letterStyle}
      type='button'
      onClick={() => this.props.pushEquals()}
    >=</button>;
  }

  createResetButton() {
    return <button
      className="btn btn-danger"
      key={`input_c`}
      style={letterStyle}
      type='button'
      onClick={() => this.props.reset()}
    >c</button>;
  }

  render() {
    return <div>
      <div className="row" style={rowStyle}>
        {this.createOpButton('÷')}
        {this.createDigitButton(7)}
        {this.createDigitButton(8)}
        {this.createDigitButton(9)}
      </div>
      <div className="row" style={rowStyle}>
        {this.createOpButton('x')}
        {this.createDigitButton(4)}
        {this.createDigitButton(5)}
        {this.createDigitButton(6)}
      </div>
      <div className="row" style={rowStyle}>
        {this.createOpButton('-')}
        {this.createDigitButton(1)}
        {this.createDigitButton(2)}
        {this.createDigitButton(3)}
      </div>
      <div className="row" style={rowStyle}>
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
