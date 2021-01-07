export const searchByTitle = searchTerm => {
  return { type: 'SEARCH_BY_TITLE', payload: searchTerm };
};

export const updateValue = value => {
  return { type: 'UPDATE_VALUE', payload: value };
};
