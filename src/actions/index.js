import * as c from './../actions/ActionTypes'

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
})

export const addPost = (newPost) => {
  const { name, post, id, timeOpen, formattedWaitTime, score } = newPost;
  return({
    type: c.ADD_POST,
    name,
    post,
    id,
    timeOpen,
    formattedWaitTime,
    score
  })
}

export const updateScore = (id, vote) => ({
  type: c.UPDATE_SCORE,
  id,
  vote
})