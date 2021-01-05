export const searchByTitle = searchTerm => {
  return { type: 'SEARCH_BY_TITLE', payload: searchTerm };
};
