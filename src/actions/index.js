import * as c from './../actions/ActionTypes'

export const deletePost = id => ({
  type: c.DELETE_POST,
  id
})

export const addPost = (newPost) => {
  const { name, post, id, timePosted, edited, score } = newPost;
  return({
    type: c.ADD_POST,
    name,
    post,
    id,
    timePosted,
    score,
    edited
  })
}

export const updateScore = (id, vote) => ({
  type: c.UPDATE_SCORE,
  id,
  vote
})

export const toggleForm = () => ({type: c.TOGGLE_FORM});