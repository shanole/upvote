import React from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function Post(props) {
  const firestore = useFirestore();
  let editedText = null;
  if (props.edited) {
    editedText = "Edited";
  }

  function whenVoteClicked(id, currScore, vote){
    const firestorePostScore = {
      score: currScore + vote
    }
    firestore.update({collection: 'posts', doc: id}, firestorePostScore);
  }

  return (
    <React.Fragment>
      <hr />
      <div onClick= { () => props.whenPostClicked(props.id)}>
        <h3 className="post-content">{props.post}</h3>
        <p className="post-author">{props.name}</p>
        <p className="timestamp">{props.timePosted}</p>
        <p className="post-score">{props.score}</p>
        <p className="edited">{editedText}</p>
      </div>
      <div className="vote-buttons">
        <button onClick = {() => whenVoteClicked(props.id, props.score, 1)}>Upvote</button>
        <button onClick = {() => whenVoteClicked(props.id, props.score, -1)}>Downvote</button>
      </div>
    </React.Fragment>
    );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  id: PropTypes.string,
  timePosted: PropTypes.string,
  edited: PropTypes.bool,
  whenPostClicked: PropTypes.func
}

export default Post;