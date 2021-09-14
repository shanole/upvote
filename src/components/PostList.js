import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function PostList(props) {
  useFirestoreConnect([ {collection: 'posts'} ]);

  const posts = useSelector(state => state.firestore.ordered.posts);
  
  if (isLoaded(posts) && !isEmpty(posts)) {
    return(
      <React.Fragment>
        {posts.map( (post) => {
          return <Post 
            whenPostClicked = {props.onPostSelection}
            whenVoteClicked = {props.onVoteClick}
            name = {post.name}
            post = {post.post}
            // timestamp is not working
            // timePosted = {post.timePosted.toDate().toString()}
            edited = {post.edited}
            score = {post.score}
            id = {post.id}
            key= {post.id}
          />
        })}
      </React.Fragment>
    );
  } else if (isEmpty(posts)) {
    return(
      <h3>No one has hit on me yet :(</h3>
    )
  } else {
    return(
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

PostList.propTypes = {
  onPostSelection: PropTypes.func,
  onVoteClick: PropTypes.func
}

export default PostList;