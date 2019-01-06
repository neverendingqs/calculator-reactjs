import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    return <label>
      {this.props.result}
    </label>;
  }
}

const mapStateToProps = ({ cfsm }) => ({ result: 1 })
const connector = connect(mapStateToProps);
export default connector(Display);
