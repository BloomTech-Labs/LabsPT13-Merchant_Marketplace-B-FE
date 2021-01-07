const initialState = {
  searchedTitle: '',
  value: '',
};

const marketplaceSearch = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'UPDATE_VALUE':
      return { ...state, value: payload };
    case 'SEARCH_BY_TITLE':
      return { ...state, searchedTitle: payload };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

export default marketplaceSearch;
