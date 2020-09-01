// Reducer
const reducer = (state = { count: 0 }, action) => {
  console.log('reducer通過')
  console.log('action.type', action.type)
  console.log('state', state)


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
