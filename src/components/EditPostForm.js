import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditPostForm(props) {
  const { post } = props;

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      name: event.target.name.value,
      post: event.target.name.value,
      id: post.id,
      timePosted: post.timePosted,
      score: post.score,
      edited: true
    })
  }

  return (
    <React.Fragment>
      <ReusableForm post= {post} formSubmissionHandler={handleEditPostFormSubmission} buttonText="Update post" />
    </React.Fragment>
    );
}

EditPostForm.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func
}

export default EditPostForm;