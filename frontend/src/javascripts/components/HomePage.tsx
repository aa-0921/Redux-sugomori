import * as React from 'react';

// import React, { useState, useEffect } from 'react';

import { Home } from '../pages/Home';
import { Pickup } from '../pages/Pickup';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Header } from './header';
import { About } from '../pages/About';
import { PostsApp } from '../pages/PostsApp';
import { ProfilePage } from '../pages/ProfilePage';
import { MemberListApp } from '../pages/MemberListApp';
import { FetchData } from '../api/FetchData';
import { useState, useEffect } from 'react';
import { useToasts, Loading, Row } from '@zeit-ui/react';
import { FeedApp } from '../pages/FeedApp';
import { BackGround } from '../pages/BackGround';
import BackGroundVanta from '../pages/BackGroundVanta';
import { Skroller } from '../pages/Skroller';


import Particles from "react-tsparticles";

export const HomePage = (props: any) => {
  const [currentUserData, setCurrentUserData] = useState({
    id: 0,
    email: '',
    name: '',
  })
  const [nowLoading, setNowLoading] = useState(false)

  const getInitialDataUrl: string = '/initial_data/show';

  useEffect(() => {
    setNowLoading(true);
    FetchData(getInitialDataUrl).then((res) => {
      setCurrentUserData(res.data);
      console.log('getInitialDataUrl', getInitialDataUrl);
      console.log('res.data', res.data);
      console.log('HomePageのcurrentUserData', currentUserData);
      console.log('currentUserData');
    });
    setNowLoading(false);
  }, []);


  // toast関連

  const [, setToast] = useToasts()
  useEffect(() => {
    var notice = document.getElementById("notice");
    const displayToast = type => setToast({
      text: notice.innerHTML,
      type,
    })
    if (notice.innerHTML) {
      displayToast('success')
    }
  }, []);
  // toast関連

  console.log('HomePageのcurrentUserData', currentUserData);

  return (
    <React.Fragment>
      {nowLoading ? (

        <div className="loadingDiv z-50  bg-black absolute opacity-50 h-screen w-screen flex justify-center flex-col items-center">
          <div className="loader"></div>
          <div className="loadingShadow"></div>
        </div>
      ) : (
          <React.Fragment></React.Fragment>
        )}
      <React.Fragment>

        <BrowserRouter>
          <Header currentUserData={currentUserData} />

          <Switch>
            <Route exact path="/"
              render={(props) =>
                <PostsApp
                  {...props}
                  currentUserData={currentUserData}
                  setNowLoading={setNowLoading}
                  nowLoading={nowLoading}
                />}
            />
            <Route exact path="/feedapp"
              render={(props) =>
                <FeedApp
                  {...props}
                  currentUserData={currentUserData}
                  setNowLoading={setNowLoading}
                  nowLoading={nowLoading}
                />}
            />
            <Route exact path="/pickup" component={Pickup} />
            <Route exact path="/about" component={About} />
            <Route path="/profilepage/:id"
              render={(props) =>
                <ProfilePage
                  {...props}
                  currentUserData={currentUserData}
                />}
            />
            <Route exact path="/MemberListApp"
              render={(props) =>
                <MemberListApp
                  {...props}
                  currentUserData={currentUserData}
                  component={MemberListApp}
                  setNowLoading={setNowLoading}
                />}
            />
            {/* <Route exact path="/background" component={BackGroundVanta} /> */}
            <Route exact path="/background" component={Skroller} />


            <Route exact path="/about" component={About} />


          </Switch>
          {/* <Footer /> */}
        </BrowserRouter >
      </React.Fragment>

    </React.Fragment>
  );
};
