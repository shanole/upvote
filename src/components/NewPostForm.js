import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase'

function NewPostForm(props) {
  const firestore = useFirestore();
  function addPostToFireStore(event) {

    event.preventDefault();
    props.onNewPostCreation();
   
    return firestore.collection('posts').add(
      {
        name: event.target.name.value,
        post: event.target.post.value, 
        score: 0,
        edited: false,
        timePosted: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addPostToFireStore}
        buttonText="Post" />
    </React.Fragment>
    );
}

// NewPostForm.propTypes = {
//   onNewPostCreation: PropTypes.func
// }

export default NewPostForm;