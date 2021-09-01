export default (state = {}, action) => {
    const { recommender, title, description, id} = action;
    switch (action.type) {
        case 'ADD_REC':
            return ({...state, [id]: {recommender, title, description, id}
            });
        default:
            return (state);
    }
};