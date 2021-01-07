const initialState = {
  searchedTitle: '',
};

const marketplaceSearch = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SEARCH_BY_TITLE':
      return { ...state, searchedTitle: payload };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

export default marketplaceSearch;
