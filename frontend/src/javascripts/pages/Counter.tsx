// import React from 'react';
import * as React from 'react';

import { connect } from 'react-redux';
import { useDispatch, useSelector, useStore } from 'react-redux';
// import { countUp, countDown } from '../../actions/index';
import { countUp, countDown } from '../../actions';


// const counterSelector = (state) => state.counter;

export const Counter = (props) => {
  console.log('Counterコンポーネント')
  // const dispatch = useDispatch();
  // const counter = useSelector(counterSelector);

  // const onCountUp = () => {
  //   dispatch({ type: 'COUNT_UP' });
  // };

  // const onCountDown = () => {
  //   dispatch({ type: 'COUNT_DOWN' });
  // };
  const onCountUp = () => {
    countUp();
    console.log('onCountUp')
  };

  const onCountDown = () => {
    countDown();
    console.log('onCountDown')
  };

  const store = useStore()
  const state = store.getState()
  console.log('store', store)
  return (
    <div className="mt-20">
      {/* <div>count:{store.getState()}</div> */}
      <div>count:{state.count}</div>

      {/* <button onClick={() => dispatch(countUp)}>up!</button> */}
      {/* <button onClick={() => dispatch(countDown)}>down!</button> */}
      <button onClick={onCountUp}>up!</button>
      <button onClick={onCountDown}>down!</button>
    </div>
  );
};

const mapStateToProps = (state) => ({ count: state.count });

export default connect(mapStateToProps, { countUp, countDown })(Counter);
