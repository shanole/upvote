import React from 'react';
import PropTypes from "prop-types";

function PostDetail(props) {
  const { post, onClickingEdit, onClickingDelete } = props;
  let editedText = null;
  if (post.edited) {
    editedText = "Edited";
  }
  return (
    <React.Fragment>
      <h3 className="post-content">{post.post}</h3>
      <p className="post-author">{post.name}</p>
      <p className="timestamp">{post.timePosted}</p>
      <p className="edited">{editedText}</p>
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