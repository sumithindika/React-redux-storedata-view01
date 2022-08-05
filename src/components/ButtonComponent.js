import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../Action/postAction';

class ButtonComponent extends Component {
  render() {
    return (
      <div>
         <button onClick={() => this.props.fetchPost()}>click me</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost: fetchPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(ButtonComponent);
