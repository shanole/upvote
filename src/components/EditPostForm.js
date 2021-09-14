import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditPostForm(props) {
  const { post } = props;
  const firestore = useFirestore();

  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost();
    const propertiesToUpdate = {
      name: event.target.name.value,
      post: event.target.post.value,
      edited: true
    } 
    return firestore.update({collection: 'posts', doc: post.id}, propertiesToUpdate)
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