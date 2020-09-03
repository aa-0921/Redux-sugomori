
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countUp, countDown, thunkCountUp } from '../../actions';

export const Counter = (props) => {
  const dispatch = useDispatch();
  // ts-loaderを入れていないので、VScode上ではエラーがでるが、コンパイルは通る。
  const count = useSelector(state => state.count)

  const onCountUp = () => {
    dispatch(countUp());
  };

  const onCountDown = () => {
    dispatch(countDown());
  };
  const onThunkCountUp = () => {
    dispatch(thunkCountUp());
  };

  return (
    <div className="mt-20">
      <div>count:{count}</div>

      <button onClick={onCountUp}>up!</button>
      <button onClick={onCountDown}>down!</button>
      <button onClick={onThunkCountUp}>thunkUp!</button>

    </div>
  );
};

