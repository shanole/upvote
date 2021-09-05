export default (state = {}, action) => {
    const { name, post, id} = action;
    switch (action.type) {
        case 'ADD_POST':
            return ({...state, [id]: {name, post, id}
            });
        case 'DELETE_POST':
          let newState = {...state};
          delete newState[id];
          return newState;
        default:
            return (state);
    }
};