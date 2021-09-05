import formVisibleReducer from "./form-visible-reducer";
import postsReducer from "./posts-reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  postsList: postsReducer
});

export default rootReducer;