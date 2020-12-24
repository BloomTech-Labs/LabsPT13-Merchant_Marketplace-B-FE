const initialState = {
  searchedTitle: '',
};

const marketplaceSearch = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TITLE_SEARCHED':
      return { ...state, searchedTitle: payload };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

export default marketplaceSearch;
