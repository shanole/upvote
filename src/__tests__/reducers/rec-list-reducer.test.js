import postsReducer from '../../reducers/posts-reducer'

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
  const recData = {
    name: 'Garrett',
    post: "If covid doesn't take you out, can I?",
    id: 1
  };

  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postsReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a new post to postList', () => {
    const { name, post, id } = recData;
    action = {
      type: 'ADD_POST',
      name: name,
      post: post,
      id: id
    };

    expect(postsReducer({}, action)).toEqual({
      [id]: {
        name: name,
        post: post,
        id: id
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

});