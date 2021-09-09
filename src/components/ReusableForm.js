import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  let postName, postContent;

  if (props.post !== undefined) {
    postName = props.post.name;
    postContent = props.post.post;
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          defaultValue= {postName}
          placeholder="Your Name" required/>
        <label>Hit me with your best pick-up line or opener:</label>
        <textarea
          name="post"
          defaultValue={postContent}
          placeholder="Text here" required/>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
    );
}

ReusableForm.propTypes = {
  post: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;