import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewPostForm(props) {
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      name: event.target.name.value,
      post: event.target.post.value,
      id: v4(),
      timePosted: new Date(Date.now()).toString(),
      score: 0,
      edited: false
    })
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Post" />
    </React.Fragment>
    );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm;