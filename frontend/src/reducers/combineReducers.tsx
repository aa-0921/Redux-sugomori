import { combineReducers } from 'redux';
import Reducer from '../reducers/index';

const Reducers = combineReducers({
  // console.log('combineReducers', combineReducers)
  counter: Reducer
});

export default Reducers;
