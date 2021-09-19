import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index'
import NewPostForm from './NewPostForm';
import EditPostForm from './EditPostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { withFirestore } from 'react-redux-firebase'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false
    };
  }

  handleEditingPostInList = () => {
    this.setState({
      editing: false,
      selectedPost: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDeletingPost = (id) => {
    this.props.firestore.delete({collection: 'posts', doc: id});
    this.setState({selectedPost: null});
  }

  handleChangingSelectedPost = (id) => {
    this.props.firestore.get({collection: 'posts', doc: id}).then((post) => {
      const firestorePost = {
        post: post.get("post"),
        name: post.get("name"),
        timePosted: (post.get("timePosted").toDate().toString()),
        score: post.get("score"),
        edited: post.get("edited"),
        id: post.id
      }
      this.setState({selectedPost: firestorePost});
    });
  }

  handleAddingNewPostToList = () => {
    const { dispatch } = this.props;
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
    } else if (this.state.selectedPost != null) {
      currentlyVisibleState = 
        <PostDetail post = {this.state.selectedPost} onClickingDelete = {this.handleDeletingPost} onClickingEdit = {this.handleEditClick} />;
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewPostForm onNewPostCreation = {this.handleAddingNewPostToList} />;
    } else {
      currentlyVisibleState =
        <PostList onPostSelection = {this.handleChangingSelectedPost} />;
      buttonText = "Post New";
    }
    return(
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        {currentlyVisibleState}
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

export default withFirestore(Dashboard);
