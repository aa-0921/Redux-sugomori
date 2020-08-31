import React from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { countUp, countDown } from '../../actions';

const counterSelector = (state) => state.counter;

export const Counter = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);

  const countUp = () => {
    dispatch({ type: 'COUNT_UP' });
  };

  const countDown = () => {
    dispatch({ type: 'COUNT_DOWN' });
  };

  return (
    <div className="mt-20">
      <div>count:{counter}</div>
      {/* <button onClick={() => dispatch(countUp())}>up!</button> */}
      {/* <button onClick={() => dispatch(countDown())}>down!</button> */}
      <button onClick={countUp}>up!</button>
      <button onClick={countDown}>down!</button>
    </div>
  );
};

// const mapStateToProps = (state) => ({ count: state.count });

// export default connect(mapStateToProps, { countUp, countDown })(Counter);
