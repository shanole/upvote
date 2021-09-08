import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
    const { name, post, timePosted, id, vote, score, edited} = action;
    switch (action.type) {
        // can be used to add or update post
        case c.ADD_POST:
            return ({...state, [id]: {name, post, id, timePosted, score, edited}
            });
        case c.DELETE_POST:
          let newState = {...state};
          delete newState[id];
          return newState;
        case c.UPDATE_SCORE:
            const currScore = state[id].score;
            const newPost2 = {...state[id], score: currScore + vote};
            const updatedState2 = {...state, [id]: newPost2}
            return updatedState2;
        default:
            return (state);
    }
};