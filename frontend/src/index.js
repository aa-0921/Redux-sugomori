import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

// store作成
const store = createStore(reducer);

render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'),
);
