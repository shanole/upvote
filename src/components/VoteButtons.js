import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />
const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} />

const Voting = styled.div`
width: 250px;
display: flex;
align-items: center;
justify-content: space-evenly;
button {
  color: white;
  padding: 2px 8px;
  border-radius: 25%;
  text-decoration: none;
  border:none;
}
`

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
  <Voting>
    <button disabled={disableUp} style={{background:upVoteColor}} onClick = {() => whenVoteClicked(props.id, props.score, 1)}>{thumbsUp}</button>
    <span className="score">{props.score}</span>
    <button disabled={disableDown} style={{background:downVoteColor}} onClick = {() => whenVoteClicked(props.id, props.score, -1)}>{thumbsDown}</button>
  </Voting>
  );
}

export default VoteButtons;