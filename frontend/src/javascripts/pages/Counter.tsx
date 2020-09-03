
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countUp, countDown, thunkCountUp, dataToCountUp, getAddress } from '../../actions';

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

  const onDataToCountUp = (num) => {
    dispatch(dataToCountUp(num));
  };

  const onGetAddress = (num) => {
    dispatch(getAddress(num));
  };

  // const displayState = getState();

  return (
    <div className="mt-20">
      <div>count:{count}</div>

      <button onClick={onCountUp}>up!</button><br />
      <button onClick={onCountDown}>down!</button><br />
      <button onClick={onThunkCountUp}>thunkUp!</button><br />
      <button onClick={() => onDataToCountUp(5)}>dataToCountUp!</button><br />
      <button onClick={() => onGetAddress(2120055)}>getAddress!</button><br />

    </div>
  );
};

