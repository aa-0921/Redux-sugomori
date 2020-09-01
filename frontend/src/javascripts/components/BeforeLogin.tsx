import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { BeforeLoginPosts } from '../pages/BeforeLoginPosts';
import { useToasts } from '@zeit-ui/react';
import { useEffect } from 'react';
import { Skroller } from '../pages/Skroller';
import { Counter } from '../pages/Counter';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../reducers'


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

  const store = createStore(reducer);

  // デバッグ
  // const window: any = ""
  // const store = createStore(
  //   reducer,
  //   compose(
  //     process.env.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
  //   )
  // )
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
