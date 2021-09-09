import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('dashboard actions', () => {
  test('deletePost should create a DELETE_TICKET action', () => {
    expect(actions.deletePost(1)).toEqual({
      type: c.DELETE_POST,
      id: 1
    });
  });

  // test('addPost should create ADD_POST action', () => {
  //   expect(actions.addPost({ name: 'Shannon', post: 'Wat up', id: 1, timePosted: "8:00", edited: false, score: 0 })).toEqual({
  //     type: c.ADD_POST,
  //     name: 'Shannon',
  //     post: 'Wat up',
  //     id: 1,
  //     timePosted: "8:00",
  //     edited: false,
  //     score: 0
  //   })
  // })

  test('updateScore should create UPDATE_SCORE action', () => {
    expect(actions.updateScore(1, 1)).toEqual({
      type: c.UPDATE_SCORE,
      id: 1,
      vote: 1
    })
  });

  test('toggleForm should create a TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    })
  })
})