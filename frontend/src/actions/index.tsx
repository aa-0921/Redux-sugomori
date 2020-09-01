// Action & ActionCreator
export const countUp = () => {
  console.log('ActionのcountUp');
  ({ type: 'COUNT_UP' });
}
export const countDown = () => {
  console.log('ActionのcountDown');
  ({ type: 'COUNT_DOWN' });
}
