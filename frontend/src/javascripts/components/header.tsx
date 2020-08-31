import * as React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown } from '@zeit-ui/react';

export function Header(props: any) {
  (function () {
    const headerTarget = document.getElementById('header'),
      height = 56;

    let offset = 0,
      lastPosition = 0,
      ticking = false;
    function onScroll(lastPosition: any) {
      if (headerTarget != null) {
        if (lastPosition > height) {
          if (lastPosition > offset) {
            headerTarget.classList.add('head-animation');
          } else {
            headerTarget.classList.remove('head-animation');
          }
          offset = lastPosition;
        }
      }
    }

    window.addEventListener('scroll', function (e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();


  (function () {
    const postButtonTarget = document.getElementById('postButton'),
      height = 56;
    let offset = 0,
      lastPosition = 0,
      ticking = false;
    function postButtonOnScroll(lastPosition: any) {
      if (postButtonTarget != null) {
        if (lastPosition > height) {
          if (lastPosition > offset) {
            postButtonTarget.classList.add('postButton-animation');
          } else {
            postButtonTarget.classList.remove('postButton-animation');
          }
          offset = lastPosition;
        }
      }
    }
    window.addEventListener('scroll', function (e) {
      lastPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          postButtonOnScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();

  return (
    <header id="header" className="header">
      <div>
        <nav className="nav bg-indigo-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 w-full">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0">
                  {/* <img className="w-30 h-30 z-20" src="../../../../app/assets/images/LOGO.svg" alt="" /> */}
                  <Link to="/home">
                    <span className="app-logo font-semibold text-xl tracking-tight text-white">SUGOMORI</span>
                  </Link>
                </div>
                <div className="w-full">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline w-auto">
                      <div className="header-button flex">
                        {props.currentUserData != null ? (
                          <React.Fragment>
                            <Link
                              to="/redux"
                              className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                              redux
                            </Link>
                            <Link
                              to="/feed"
                              className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                              Feed
                            </Link>


                            <Link
                              to={'/profilepage/' + props.currentUserData.id}
                              className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium  hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                              YourProfile
                            </Link>
                            <Link
                              to="/UserList"
                              className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                              UserList
                            </Link>
                            <Link
                              to="/"
                              className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                            >
                              About
                            </Link>
                          </React.Fragment>
                        ) : (
                            <React.Fragment>
                              <Link
                                to="/redux"
                                className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                              >
                                redux
                            </Link>
                              <Link
                                to="/"
                                className="text-lg text-white ml-4 px-3 py-2 rounded-md sm:test-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                              >
                                About
                              </Link>
                            </React.Fragment>
                          )}
                      </div>
                      <div className="buttonDropdownWrap ml-auto mr-5">
                        {props.currentUserData != null ? (
                          <React.Fragment>
                            <ButtonDropdown size="small" className="bg-indigo-300">
                              <ButtonDropdown.Item main>
                                Settings
                              </ButtonDropdown.Item>
                              {/* <ButtonDropdown.Item>
                                <a
                                  href="/users/edit"
                                  className="block px-4 py-2 sm:test-sm text-gray-700"
                                  role="menuitem"
                                >
                                  プロフィール変更
                                </a>
                              </ButtonDropdown.Item> */}
                              <ButtonDropdown.Item>
                                <a
                                  href="/users/sign_out"
                                  className="block px-4 py-2 sm:test-sm text-gray-700"
                                  role="menuitem"
                                >
                                  ログアウト
                                </a>
                              </ButtonDropdown.Item>
                            </ButtonDropdown>
                          </React.Fragment>
                        ) : (
                            <React.Fragment>
                              <ButtonDropdown size="small">
                                <ButtonDropdown.Item main>
                                  <a href="/users/sign_in">ログイン</a>
                                </ButtonDropdown.Item>
                                <ButtonDropdown.Item>
                                  <a href="/users/sign_up">新規登録</a>
                                </ButtonDropdown.Item>
                              </ButtonDropdown>
                            </React.Fragment>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header >
  );
}
