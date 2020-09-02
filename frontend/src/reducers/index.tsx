// Reducer

import { useDispatch, useSelector, useStore } from 'react-redux';
// const store = useStore()
// const state = store.getState()
const reducer = (state = { count: 0 }, action) => {
  console.log('reducer通過')
  console.log('action.type', action.type)
  console.log('state', state);

  // const store = useStore()
  // const state = store.getState()

  // const count = state.count;
  // console.log('reducerのcount', count)

  switch (action.type) {
    case 'COUNT_UP':
      console.log('reducerのCOUNT_UP');
      return { count: state.count + 1 };
    case 'COUNT_DOWN':
      console.log('reducerのCOUNT_DOWN');
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
