// Action & ActionCreator
export const countUp = () => {
  return ({ type: 'COUNT_UP' });
}
export const countDown = () => {
  return ({ type: 'COUNT_DOWN' });
}

export const thunkCountUp = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(countUp());
    }, 1000);
  };
}
