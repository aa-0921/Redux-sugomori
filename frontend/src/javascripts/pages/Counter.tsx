// import React from 'react';
import * as React from 'react';
import { useEffect } from 'react';

import { connect } from 'react-redux';
import { useDispatch, useSelector, useStore } from 'react-redux';
// import { countUp, countDown } from '../../actions/index';
import { countUp, countDown } from '../../actions';


// const counterSelector = (state) => state.counter;

type State = {
  count: number
}


export const Counter = (props) => {
  // console.log('Counterコンポーネント')
  // console.log('props', props)


  const dispatch = useDispatch();
  // const counter = useSelector(counterSelector);

  // const onCountUp = () => {
  //   dispatch({ type: 'COUNT_UP' });
  // };

  // const onCountDown = () => {
  //   dispatch({ type: 'COUNT_DOWN' });
  // };

  const count = useSelector(state => state.count)

  const onCountUp = () => {
    dispatch(countUp());
    // console.log('onCountUp')
    // console.log('state.count', state.count)

  };

  const onCountDown = () => {
    dispatch(countDown());
    // console.log('onCountDown')
    // console.log('state.count', state.count)

  };

  // const store = useStore()
  // const state = store.getState()
  // console.log('store', store)
  // console.log('state[count]', state['count'])
  // console.log('state.class', state.class)
  // console.log('state.count', state.count)

  // useEffect(() => {
  //   console.log('useEffectのstore', store)
  // }, [store]);

  return (
    <div className="mt-20">
      {/* <div>count:{store.getState()}</div> */}
      {/* <div>count:{store.getState().count}</div> */}

      {/* <div>count:{state.value}</div> */}
      <div>count:{count}</div>

      {/* <div>{props}</div> */}


      {/* <button onClick={() => dispatch(countUp)}>up!</button> */}
      {/* <button onClick={() => dispatch(countDown)}>down!</button> */}
      <button onClick={onCountUp}>up!</button>
      <button onClick={onCountDown}>down!</button>
    </div>
  );
};

// const mapStateToProps = (state) => ({ count: state.count });

// export default connect(mapStateToProps, { countUp, countDown })(Counter);
