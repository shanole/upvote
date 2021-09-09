import React from 'react';
import PropTypes from "prop-types";

function Post(props) {
  let editedText = null;
  if (props.edited) {
    editedText = "Edited";
  }
  return (
    <React.Fragment>
      <hr />
      <div onClick= { () => props.whenPostClicked(props.id)}>
        <h3 className="post-content">{props.post}</h3>
        <p className="post-author">{props.name}</p>
        <p className="timestamp">{props.timePosted}</p>
        <p className="edited">{editedText}</p>
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