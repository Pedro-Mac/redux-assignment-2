import * as actionType from './actions';

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PERSON:
      return {
        persons: [
          ...state.persons,
          {
            id: Math.random(),
            name: 'Pedro',
            age: Math.floor(Math.random() * 40)
          }
        ]
      };
    case actionType.DELETE_PERSON:
      const newArray = state.persons.filter(value => {
        return value.id !== action.personId;
      });
      return {
        persons: newArray
      };
    default:
      return state;
  }
};

export default reducer;
