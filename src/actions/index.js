import * as c from './../actions/ActionTypes'

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
})


export const updateScore = (id, vote) => ({
  type: c.UPDATE_SCORE,
  id,
  vote
})

export const toggleForm = () => ({type: c.TOGGLE_FORM});