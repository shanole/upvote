import React from 'react';
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function Post(props) {
  const firestore = useFirestore();
  const [disableUp, setDisableUp] = React.useState(false);
  const [disableDown, setDisableDown] = React.useState(false);
  const [voted, setVoted] = React.useState(false);
  const [prevVote, setPrevVote] = React.useState(null);
  const [upVoteColor, setUpVoteTrueColor] = React.useState('grey');
  const [downVoteColor, setDownVoteTrueColor] = React.useState('grey');

  let editedText = null;
  if (props.edited) {
    editedText = "Edited";
  }
  
  function whenVoteClicked(id, currScore, vote){
    if (voted){
      const firestorePostScore = {
        score: currScore - prevVote
      }
      firestore.update({collection: 'posts', doc: id}, firestorePostScore);
      setVoted(false);
      setDisableDown(false);
      setDisableUp(false);
      setUpVoteTrueColor('grey');
      setDownVoteTrueColor('grey');
    }
  
    else {
      const firestorePostScore = {
        score: currScore + vote
      }
      firestore.update({collection: 'posts', doc: id}, firestorePostScore);
      //toggles opposite button clicked to false
      vote === 1 ? setDisableDown(true) : setDisableUp(true);
      vote === 1 ? setUpVoteTrueColor('green') : setUpVoteTrueColor('grey');
      vote === -1 ? setDownVoteTrueColor('green') : setDownVoteTrueColor('grey');
      setVoted(true);
      setPrevVote(vote);
    }
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
        <button disabled={disableUp} style={{background:upVoteColor}} onClick = {() => whenVoteClicked(props.id, props.score, 1)}>Upvote</button>
        <button disabled={disableDown} style={{background:downVoteColor}} onClick = {() => whenVoteClicked(props.id, props.score, -1)}>Downvote</button>
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



// -if you click a button, the other one should be disabled
// -if you click the original button again, it removes the previous value

//the post should know if you've clicked it before
//if you click the same button again, it should REMOVE the previous vote

//each time you click the button, it does the opposite

// const [voted, setVoted] = React.useState(false);
// const [prevVote, setPrevVote] = React.useState(null);


// function whenVoteClicked(id, currScore, vote){
//   if (voted){
//     const firestorePostScore = {
//       score: currScore - prevVote
//     }
//     firestore.update({collection: 'posts', doc: id}, firestorePostScore);
//     setVoted(false);
//   }

//   else {
//     const firestorePostScore = {
//       score: currScore + vote
//     }
//     firestore.update({collection: 'posts', doc: id}, firestorePostScore);
//     //toggles opposite button clicked to false
//     vote === 1 ? setDisableDown(true) : setDisableUp(true);
//     setUserVoted(true);
//     setPrevVote(vote);
//   }
// }