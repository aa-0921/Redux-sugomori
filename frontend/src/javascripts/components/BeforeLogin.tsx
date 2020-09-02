import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { BeforeLoginPosts } from '../pages/BeforeLoginPosts';
import { useToasts } from '@zeit-ui/react';
import { useEffect } from 'react';
import { Skroller } from '../pages/Skroller';
import { Counter } from '../pages/Counter';

// import { createStore, compose } from 'redux';
import {
  createStore,
  compose,
} from "redux";
import { Provider } from 'react-redux';
import reducer from '../../reducers/'

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// // }
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION__: any
//   }
// }

// const store = createStore(
//   reducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer, composeEnhancers())

// const anyWindow = window as any


// const store = createStore(
//   reducer,
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(reducer);

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers())



export const BeforeLogin = () => {
  // toast関連
  const [, setToast] = useToasts()
  useEffect(() => {
    var notice: HTMLElement | null = document.getElementById("notice");
    if (!notice) return;
    setToast({
      text: notice.innerHTML,
      type: 'success',
    })
  }, []);

  const currentUserData = null;
  console.log('reducer(BeforeLoginコンポーネント)', reducer)

  // const store = createStore(reducer);
  // console.log('BeforeLoginのstore', store)



  // interface ExtendedWindow extends Window {
  //   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  // }
  // declare var window: ExtendedWindow;

  // const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



  // const store = createStore(
  //   initReducer(),
  //   state,
  //   composeReduxDevToolsEnhancers(applyMiddleware(...middlewares))
  // );


  return (
    <BrowserRouter>
      <Provider store={store}>

        <Header currentUserData={currentUserData} />
        <Switch>
          <Route exact path="/home" component={BeforeLoginPosts} />
          <Route exact path="/" component={Skroller} />

          <Route exact path="/redux" component={Counter} />

        </Switch>
      </Provider>

    </BrowserRouter>
  );
};
