import recListReducer from '../../reducers/rec-list-reducer';

describe('recListReducer', () => {

  const currentState = {
    1: {
      recommender: 'Garrett',
      title: 'Batman',
      description: "I really love bats. I was sorely disappointed that they didn't feature more.",
      id: 1
    },
    2: {
      recommender: 'Shannon',
      title: 'Mamma Mia',
      description: "This is a perfect movie.",
      id: 2
    }
  }
  const recData = {
    recommender: 'Garrett',
    title: 'Batman',
    description: "I really love bats. I was sorely disappointed that they didn't feature more.",
    id: 1
  };

  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(recListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a new recommendation to recList', () => {
    const { recommender, title, description, id } = recData;
    action = {
      type: 'ADD_REC',
      recommender: recommender,
      title: title,
      description: description,
      id: id
    };

    expect(recListReducer({}, action)).toEqual({
      [id]: {
        recommender: recommender,
        title: title,
        description: description,
        id: id
      }
    });
  });

  test('Should successfully delete a recommendation', () => {
    action = {
      type: 'DELETE_REC',
      id: 1
    }

    expect(recListReducer(currentState, action)).toEqual({
      2: {
        recommender: 'Shannon',
        title: 'Mamma Mia',
        description: "This is a perfect movie.",
        id: 2
      }
    });
  });


});