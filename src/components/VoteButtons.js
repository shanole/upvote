import React from 'react';
import { useFirestore } from 'react-redux-firebase';


function VoteButtons(props) {
  const firestore = useFirestore();
  
  const [disableUp, setDisableUp] = React.useState(false);
  const [disableDown, setDisableDown] = React.useState(false);
  const [voted, setVoted] = React.useState(false);
  const [prevVote, setPrevVote] = React.useState(null);
  const [upVoteColor, setUpVoteTrueColor] = React.useState('grey');
  const [downVoteColor, setDownVoteTrueColor] = React.useState('grey');


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
      vote === 1 ? setUpVoteTrueColor('#A3DD70') : setUpVoteTrueColor('grey');
      vote === -1 ? setDownVoteTrueColor('#dd7370') : setDownVoteTrueColor('grey');
      setVoted(true);
      setPrevVote(vote);
    }
  }
  
  return (
  <div className="vote-buttons">
    <button disabled={disableUp} style={{background:upVoteColor}} onClick = {() => whenVoteClicked(props.id, props.score, 1)}>Upvote</button>
    <span className="score">{props.score}</span>
    <button disabled={disableDown} style={{background:downVoteColor}} onClick = {() => whenVoteClicked(props.id, props.score, -1)}>Downvote</button>
  </div>
  );
}

export default VoteButtons;