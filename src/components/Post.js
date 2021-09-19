import React from 'react';
import VoteButtons from './VoteButtons';
import PropTypes from "prop-types";
import styled from 'styled-components';

const PostMessage = styled.div`

p {
  max-width: 400px;
  word-wrap: break-word;
  margin-bottom: 0px;
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

.post{
  color: white;
  background: #0B93F6;
  align-self: flex-end;

  &:before {
    right: -7px;
    width: 20px;
    background-color: #0B93F6;
    border-bottom-left-radius: 16px 14px;

  }
  
  &:after {
    right: -26px;
    width: 26px;
    background-color: #262626;
    border-bottom-left-radius: 10px;

  }

  &:hover {
    background-color: #6dbefa;
    cursor: pointer
  }

  &:hover:before {
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
  padding: 0px;
  font-size: 18px;
  margin-top: 50px;
  margin-bottom: 5px;
  margin-right: 0px;
}

.post-info {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
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
          <p className="post">{props.post} </p>
        </div>
        <div className="post-info">
          <p className="edited">{editedText}</p>
          <VoteButtons id={props.id} score={props.score}  />
        </div>
      </ PostMessage>
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