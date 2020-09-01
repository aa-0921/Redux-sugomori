// Action & ActionCreator
export const countUp = () => {
  console.log('ActionのcountUp');
  return ({ type: 'COUNT_UP' });
}
export const countDown = () => {
  console.log('ActionのcountDown');
  return ({ type: 'COUNT_DOWN' });
}
