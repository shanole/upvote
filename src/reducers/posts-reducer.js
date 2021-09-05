export default (state = {}, action) => {
    const { name, post, timeOpen, formattedWaitTime, id, vote, score} = action;
    switch (action.type) {
        case 'ADD_POST':
            return ({...state, [id]: {name, post, id, timeOpen, formattedWaitTime, score}
            });
        case 'DELETE_POST':
          let newState = {...state};
          delete newState[id];
          return newState;
        case 'UPDATE_TIME':
            const newPost = {...state[id], formattedWaitTime};
            const updatedState = {...state, [id]: newPost};
            return updatedState;
        case 'UPDATE_SCORE':
            const currScore = state[id].score;
            const newPost2 = {...state[id], score: currScore + vote};
            const updatedState2 = {...state, [id]: newPost2}
            return updatedState2;
        default:
            return (state);
    }
};