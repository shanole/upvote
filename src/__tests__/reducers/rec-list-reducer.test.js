import postsReducer from '../../reducers/posts-reducer'
import Moment from 'moment';

describe('postsReducer', () => {

  const currentState = {
    1: {
      name: 'Garrett',
      post: "If covid doesn't take you out, can I?",
      id: 1
    },
    2: {
      name: 'Shannon',
      post: "U up?",
      id: 2
    }
  }
  const postData = {
    name: 'Garrett',
    post: "If covid doesn't take you out, can I?",
    timeOpen: 0,
    id: 1
  };

  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postsReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a new post to postList that includes Moment-formatted wait times', () => {
    const { name, post, timeOpen, formattedWaitTime, id } = postData;
    action = {
      type: 'ADD_POST',
      name,
      post,
      timeOpen,
      id,
      formattedWaitTime: new Moment().fromNow(true)
    };

    expect(postsReducer({}, action)).toEqual({
      [id]: {
        name,
        post,
        id,
        timeOpen,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: 'DELETE_POST',
      id: 1
    }

    expect(postsReducer(currentState, action)).toEqual({
      2: {
        name: 'Shannon',
        post: "U up?",
        id: 2
      }
    });
  });

  test('Should add a formatted wait time to ticket entry', () => {
    const { name, post, timeOpen, id } = postData;
    action = {
      type : 'UPDATE_TIME',
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(postsReducer({ [id] : postData }, action)).toEqual({
      [id] : {
        name,
        post,
        timeOpen,
        id,
        formattedWaitTime : '4 minutes'
      }
    });
  });
});