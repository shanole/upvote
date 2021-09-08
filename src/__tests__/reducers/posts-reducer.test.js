import postsReducer from '../../reducers/posts-reducer'
import * as c from '../../actions/ActionTypes'

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
    timePosted: 0,
    id: 1,
    score: 0
  };

  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postsReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a new post to postList', () => {
    const { name, post, timePosted, score, id } = postData;
    action = {
      type: c.ADD_POST,
      name,
      post,
      timePosted,
      id,
      score,
    };

    expect(postsReducer({}, action)).toEqual({
      [id]: {
        name,
        post,
        id,
        score,
        timePosted,
      }
    });
  });

  test('Should successfully delete a post', () => {
    action = {
      type: c.DELETE_POST,
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

  test("Should update post's score by specified amount", () => {
    const { name, post, id, timePosted, score } = postData;
    action = {
      type: c.UPDATE_SCORE,
      id: 1,
      vote: -1
    };

    expect(postsReducer( { [id] : postData }, action )).toEqual({
      [id]: {
        name,
        post,
        id,
        timePosted,
        score: -1
      }
    })
  })
});