import formVisibleReducer from "./form-visible-reducer";
import postsReducer from "./posts-reducer";
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // comes with redux-firestore

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPostsList: postsReducer,
  firestore: firestoreReducer //state slice for our redux store. connects firestore database to redux. 
});

export default rootReducer;