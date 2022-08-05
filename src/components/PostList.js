import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import {selectPost} from '../Action/postAction';


class PostList extends Component {
  createListItems() {
    return this.props.allPosts.map((post) => {
      return (
        <li onClick={()=>this.props.selectPost(post)} key={post.id}>
          {post.title} {post.body}
        </li>
      );
    });
  }

  render() {
    if (!this.props.allPosts) {
      return <h1>Click The Button First..</h1>;
    }
    return <ul>{this.createListItems()}</ul>;
  }
}
function mapStateToProps(state) {
  return {
    allPosts: state.allPosts,
  };
}

function matchDispatchToProps(dispatch){
return bindActionCreators({selectPost:selectPost},dispatch);

}
export default connect(mapStateToProps,matchDispatchToProps)(PostList);
