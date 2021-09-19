import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  input, textarea {
    display: block;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    color: #262626;
  }
  label {
    margin: 8px 0px 10px 0px;
  }
  textarea {
    height: 150px;
    margin-bottom: 20px;
  }
`

function ReusableForm(props) {
  let postName, postContent;

  if (props.post !== undefined) {
    postName = props.post.name;
    postContent = props.post.post;
  }

  return (
    <StyledForm>
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
      </StyledForm>
    );
}

ReusableForm.propTypes = {
  post: PropTypes.object,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;