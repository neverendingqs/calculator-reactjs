import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    return <h1 class="display-1 text-center">
      {this.props.result}
    </h1>;
  }
}

const mapStateToProps = ({ cfsmState: { result } }) => ({ result })
const connector = connect(mapStateToProps);
export default connector(Display);
