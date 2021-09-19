import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp} />

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

.post {
	background: #E5E5EA;
	color: black;
  align-self: flex-start;
		
	&:before {
		left: -7px;
    width: 20px;
    background-color: #E5E5EA;
		border-bottom-right-radius: 16px 14px;
	}
	&:after {
		left: -26px;
    width: 26px;
    background-color: #262626;
		border-bottom-right-radius: 10px;
	}
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
  align-items: top;
  margin: 10px 0px;
}
.edited {
  font-size: 14px;
  font-style: italic;
}
.score {
  font-size: 14px;
}
.timestamp {
  font-size: 12px;
}
`

function PostDetail(props) {
  const { post, onClickingEdit, onClickingDelete } = props;
  let editedText = null;
  if (post.edited) {
    editedText = "Edited";
  }
  return (
    <React.Fragment>
      <PostMessage>
        <p className="post-author">{post.name}</p>
        <p className="post">{post.post}</p>
      <div className="post-info">
        <p className="edited">{editedText}</p>
        <p className="timestamp">{post.timePosted}</p>
        <p className="score">{thumbsUp} {post.score}</p>
      </div>
      </PostMessage>
      <button onClick={ onClickingEdit }>Update post</button>
      <button onClick={ () => onClickingDelete(post.id) }>Delete post</button>
      <hr />
    </React.Fragment>
    );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default PostDetail;