// Reducer
const reducer = (state = { count: 0 }, action) => {
  console.log('reducer通過')
  console.log('action.type', action.type)
  console.log('state', state);
  console.log('action', action);



  switch (action.type) {
    case 'COUNT_UP':
      console.log('reducerのCOUNT_UP');
      return { count: state.count + 1 };
    case 'COUNT_DOWN':
      console.log('reducerのCOUNT_DOWN');
      return { count: state.count - 1 };
    case 'DATA_TO_COUNT_UP':
      console.log('reducerのdataToCountUp');
      const actionData = action.data
      return { count: state.count + actionData };
    default:
      return state;
  }
};

export default reducer;
