import React from 'react';
import VoteButtons from './VoteButtons';
import PropTypes from "prop-types";
import styled from 'styled-components';

const PostMessage = styled.div`
.post h2 {
  max-width: 255px;
  word-wrap: break-word;
  margin-bottom: 12px;
  line-height: 24px;
  position: relative;
	padding: 10px 20px;
  border-radius: 25px;
  
  &:before, &:after {
    content: "";
		position: absolute;
    bottom: 0;
    height: 25px;
  }
}

.post {
  max-width: 400px;
  word-wrap: break-word;
  line-height: 24px;
  margin-bottom: 10px;
  position: relative;
	padding: 10px 20px;
  border-radius: 25px;
  color: white; 
  background: #0B93F6;
  align-self: flex-end;

  &:before {
    right: -7px;
    width: 20px;
    background-color: #26262;
    border-bottom-left-radius: 16px 14px;
  }
  
  &:after {
    right: -26px;
    width: 26px;
    background-color: #26262;
    border-bottom-left-radius: 10px;
  }

  &:hover {
    background-color: #6dbefa;
    cursor: pointer
  }
}
.edited {
  font-size: 14px;
  font-style: italic;
}

.post-author {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0px;
  margin-right: 40px;
}

`;

function Post(props) {

  let editedText = null;
  if (props.edited) {
    editedText = "Edited";
  }

  return (
    <React.Fragment>
      <PostMessage>
        <div onClick= { () => props.whenPostClicked(props.id)}>
          <p className="post-author">{props.name}</p>
          <div className="post">
            <h3>{props.post}</h3>
            <p className="edited">{editedText}</p>
          </div>
        </div>
      </ PostMessage>
        <VoteButtons id={props.id} score={props.score}  />
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