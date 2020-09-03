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
    // ----------------------------------------------

    case 'GET_ADDRESS_REQUEST':
      return { count: state.count };
    // return Object.assign({}, state, {
    //   isFetching: true,
    //   address: []
    // });
    case 'GET_ADDRESS_SUCCESS':
      console.log('reducerのaction.data', action.data)
      return { count: state.count + action.data };
    // return Object.assign({}, state, {
    //   isFetching: false,
    //   address: action.data,
    // });
    case 'GET_ADDRESS_FAILURE':
      return { count: state.count };

    // return Object.assign({}, state, {
    //   isFetching: false,
    //   error: action.error
    // });


    default:
      return state;
  }
};

export default reducer;
