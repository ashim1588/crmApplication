export const selectPerson = peopleId => {
  return {
    type: 'SELECTED_PERSON',
    selectedId: peopleId,
  };
};

export const nonPerson = () => {
  return {
    type: 'NON_SELECTED',
  };
};
