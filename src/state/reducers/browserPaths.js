const browserPaths = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_PATH':
      state.push(payload);
      return state;
    case 'REMOVE_PATH':
      state.pop();
      return state;
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

export default browserPaths;
