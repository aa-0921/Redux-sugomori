// Reducer
const reducer = (state = { count: 0 }, action) => {
  const count = state.count;
  switch (action.type) {
    case 'COUNT_UP':
      return { count: count + 1 };
    case 'COUNT_DOWN':
      return { count: count - 1 };
    default:
      return state;
  }
};

export default reducer;
