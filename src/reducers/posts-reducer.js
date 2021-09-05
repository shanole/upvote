export default (state = {}, action) => {
    const { name, post, timeOpen, formattedWaitTime, id} = action;
    switch (action.type) {
        case 'ADD_POST':
            return ({...state, [id]: {name, post, id, timeOpen, formattedWaitTime}
            });
        case 'DELETE_POST':
          let newState = {...state};
          delete newState[id];
          return newState;
        case 'UPDATE_TIME':
            const newPost = {...state[id], formattedWaitTime};
            const updatedState = {...state, [id]: newPost};
            return updatedState;
        default:
            return (state);
    }
};