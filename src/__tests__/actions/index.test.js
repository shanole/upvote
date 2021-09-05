import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('dashboard actions', () => {
  test('deletePost should create a DELETE_TICKET action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });

  test('addPost should create ADD_POST action', () => {
    expect(actions.addPost({ name: 'Shannon', post: 'Wat up', id: 1, timeOpen: 0, formattedWaitTime: 'a few seconds', score: 0 })).toEqual({
      type: c.ADD_POST,
      name: 'Shannon',
      post: 'Wat up',
      id: 1,
      timeOpen: 0,
      formattedWaitTime: 'a few seconds',
      score: 0
    })
  })
})