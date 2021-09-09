import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <React.Fragment>
      {Object.values(props.postList).map( (post) => {
        return <Post
          whenPostClicked = {props.onPostSelection}
          whenVoteClicked = {props.onVoteClick}
          name = {post.name}
          post = {post.post}
          timePosted = {post.timePosted}
          edited = {post.edited}
          id = {post.id}
          score= {post.score}
          key = {post.id} />
      })}
    </React.Fragment>
    );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  onVoteClick: PropTypes.func
}

export default PostList;