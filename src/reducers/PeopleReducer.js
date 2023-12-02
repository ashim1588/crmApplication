import people from './people.json';

const initialState = {
  people,
  detailView: false,
  personSelected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_PERSON':
      return {
        ...state,
        detailView: true,
        personSelected: action.selectedId,
      };
    case 'NON_SELECTED':
      return {
        ...state,
        detailView: false,
        personSelected: null,
      };
    case 'FORM_UPDATE':
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    case 'NEW_CONTACT':
      return initialState;

    case 'ADD_PERSON':
      return {
        ...state,
        ...action.newPerson,
      };
    default:
      return state;
  }
};
