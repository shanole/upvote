import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index'
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPost(postToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.masterPostsList[id];
    this.setState({ selectedPost });
  }

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        selectedPost: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = "Return to Dashboard";

    if (this.state.editing) {
      currentlyVisibleState = 
        <EditPostForm post = {this.state.selectedPost} onEditPost = {this.handleEditingPostInList}/>;
      // buttonText = "Return to dashboard";
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = 
        <PostDetail post = {this.state.selectedPost} onClickingDelete = {this.handleDeletingPost} onClickingEdit = {this.handleEditClick} />;
      // buttonText = "Return to dashboard";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation = {this.handleAddingNewPostToList} />;
      // buttonText = "Return to dashboard";
    } else {
      currentlyVisibleState =
        <PostList postList = {this.props.masterPostsList} onPostSelection = {this.handleChangingSelectedPost} />;
      buttonText = "Post New";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterPostsList: state.masterPostsList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

Dashboard.propTypes = {
  masterPostsList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
}

Dashboard = connect(mapStateToProps)(Dashboard);

export default Dashboard;
