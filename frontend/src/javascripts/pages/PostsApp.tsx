import * as React from 'react';
import { useState, useEffect } from 'react';
import { FetchData } from '../api/FetchData'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { PostList } from '../components/PostList';
import { Modal, Spacer, Divider, Row, Slider, Collapse, Tooltip, Popover, Text } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { CommentApp } from '../components/CommentApp';
import { LikeButton } from '../components/LikeButton';
import { PostModal } from '../components/PostModal';
import { ClarifaiTagList } from '../components/ClarifaiTagList';

export const PostsApp = (props: any) => {

  // 全投稿の配列のState定義
  const [fetchPosts, setFetchPosts] = useState([]);
  const [initialFetchPosts, setInitialFetchPosts] = useState([]);
  // 検索のfilter後の投稿の配列の定義
  const [filterPosts, setFilterPosts] = useState([]);
  const [likeList, setLikeList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const [clickedPostUser, setClickedPostUser] = useState({
    id: 0,
    name: '',
  });
  const [clickedPost, setClickedPost] = useState({
    id: 0,
    picture: '',
    content: '',
    user_id: 0,
  });

  const getAllPostUrl: string = '/picposts';
  useEffect(() => {
    FetchData(getAllPostUrl).then((res) => {
      setFetchPosts(res.data);
      setInitialFetchPosts(res.data);
    });
  }, []);
  const currentUserId = props.currentUserData.id;
  const getLikeListUrl: string = `/picposts/like_list/${currentUserId}`;

  useEffect(() => {
    if (currentUserId != 0) {
      FetchData(getLikeListUrl).then((res) => {
        setLikeList(res.data);
      });
    };
  }, [currentUserId]);

  useEffect(() => {
    setFilterPosts(fetchPosts);
  }, [fetchPosts]);

  const filterList = (e: any) => {
    const updateList = initialFetchPosts.filter((post: any) => {
      return post.content.search(e.target.value) !== -1;
    });
    setFetchPosts(updateList);
  };

  // modal,open,close
  const modalOpenHandler = (post: any) => {
    setClickedPost(post);

    setModalOpen(true);
    removeHeader();
  };
  const closeHandler = () => {
    setModalOpen(false);
    addHeader();
  };

  const removeHeader = () => {
    const target = document.getElementById('header')
    target.classList.add('head-animation');
    const postButtonTarget = document.getElementById('postButton');
    postButtonTarget.classList.add('postButton-animation');

  };

  const addHeader = () => {
    const target = document.getElementById('header')
    target.classList.remove('head-animation');
    const postButtonTarget = document.getElementById('postButton');
    postButtonTarget.classList.remove('postButton-animation');
  };

  const goProfile = () => {
    addHeader();
    props.history.push('/profilepage/' + clickedPost.user_id);
  };

  const getClickedPostUserUrl: string = '/users/' + clickedPost.user_id;

  useEffect(() => {
    if (clickedPost.user_id != 0) {
      FetchData(getClickedPostUserUrl).then((res) => setClickedPostUser(res.data));
    }
  }, [clickedPost]);

  const pushToLikeList = (picpost_id: number) => {
    const arr = Array.from(likeList);
    arr.push(picpost_id);
    setLikeList(arr);
  };

  const removeFromLikeList = (picpost_id: number) => {
    const arr = Array.from(likeList);
    const nextLikeUsers = arr.filter((el) => el !== picpost_id);
    setLikeList(nextLikeUsers);
  };

  // 投稿フォームmodal,open,close
  const [postModalOpen, setPostModalOpen] = useState(false);
  const postModalOpenHandler = () => {
    setPostModalOpen(true);
    removeHeader();
  };

  const postModalCloseHandler = () => {
    setPostModalOpen(false);
    addHeader();
  };

  // Slider関連
  const [columnWidthValue, setColumnWidthValue] = useState(300)
  const columnWidthHandler = (val: any) => {
    setColumnWidthValue(val)
  }

  // 投稿ボタン関連
  (function () {
    const postButtonTarget = document.getElementById('postButton'),

      height = 56;

    let offset = 0,
      lastPosition = 0,
      ticking = false;
    function onScroll(lastPosition: any) {
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
          onScroll(lastPosition);
          ticking = false;
        });
        ticking = true;
      }
    });
  })();

  return (
    <React.Fragment>
      <Router>
        <div className="relative">
          {/* <BackGroundVanta /> */}
          <div className="About absolute z-10  w-screen">
            <div>
              <div>
                {/* // Collapse関連 */}
                <Spacer y={2} />
                <div className="collapseWrap mt-50 pt-5 h-30">
                  <Collapse.Group>
                    <Collapse title=" " initialVisible>
                      <Text></Text>

                      <div className=" flex justify-center items-center h-10">
                        <span className="wr-10 pr-5">
                          <Icon.Maximize2 size={25} />
                        </span>
                        <Row style={{ width: '75%' }}>
                          <Slider
                            className="postWidthSlider"
                            value={columnWidthValue}
                            onChange={columnWidthHandler}
                            step={20} max={400} min={100} initialValue={300}
                          />
                        </Row>
                        <Text></Text>
                      </div>
                    </Collapse>
                  </Collapse.Group>
                </div>
                <div className="flex justify-end mr-5">
                  <form action="">
                    <input type="text" placeholder="search" onChange={filterList} className="w-auto shadow border rounded py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline" />
                  </form>
                </div>

                <PostList
                  fetchPosts={fetchPosts}
                  likeList={likeList}
                  pushToLikeList={pushToLikeList}
                  removeFromLikeLisft={removeFromLikeList}
                  modalOpenHandler={modalOpenHandler}
                  filterList={filterList}
                  filterPosts={filterPosts}
                  columnWidthValue={columnWidthValue}
                // gutterWidth={gutterWidth}
                // gutterHeight={gutterHeight}

                />
              </div>

              <Modal width="100vh" wrapClassName={"modalWrap"}
                open={modalOpen} onClose={closeHandler}>
                <React.Fragment>
                  <Modal.Content className="overflow-y-scroll h-screen z-10">
                    <div className="flex flex-col items-center h-auto">
                      <div className="imageDiv flex flex-col h-auto">
                        <img src={clickedPost.picture} className="modalImage object-contain rounded-lg" />
                      </div>
                      <Spacer y={0.2} />

                      <ClarifaiTagList
                        clickedPost={clickedPost}
                      />
                      <Spacer y={0.5} />

                      <div className="flex text-center mt-4">
                        <Link
                          to={'/profilepage/' + clickedPost.user_id}
                          onClick={() => goProfile()}
                        >
                          <span>{clickedPostUser.name}</span>
                        </Link>
                        &emsp; {clickedPost.content}&emsp;
                      <LikeButton
                          likeList={likeList}
                          clickedPost={clickedPost}
                          pushToLikeList={pushToLikeList}
                          removeFromLikeList={removeFromLikeList}
                          currentUserData={props.currentUserData}
                        />
                      </div>

                      <Spacer y={2} />

                      {/* コメント部分ーーーーーーーーーーーーー */}
                      <div className="block">
                        <CommentApp
                          clickedPostId={clickedPost.id}
                          currentUserData={props.currentUserData}
                        />
                      </div>
                      {/* コメント部分ーーーーーーーーーーーーー */}
                    </div>
                  </Modal.Content>
                  <Divider className="m-6" />
                  <Modal.Action passive onClick={() => setModalOpen(false)}
                    className="h-5">
                    Cancel
                </Modal.Action>
                </React.Fragment>
              </Modal>

              <PostModal
                postModalOpen={postModalOpen}
                filterPosts={filterPosts}
                setFilterPosts={setFilterPosts}
                setPostModalOpen={setPostModalOpen}
                postModalOpenHandler={postModalOpenHandler}
                postModalCloseHandler={postModalCloseHandler}
                setNowLoading={props.setNowLoading}
                nowLoading={props.nowLoading}
                currentUserId={currentUserId}
              />
              {/*ーーーーーーーーーーーーーーーーーーーーーーーーー */}
              {/* 投稿ボタン */}
              <div
                className="fixed bottom-0 right-0 z-10 m-12"
                id="postButton"
              >
                <button
                  onClick={() => postModalOpenHandler()}
                  className="transition duration-500 ease-in-out bg-indigo-300 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 text-white font-bold py-6 px-6 border-b-4 border-indigo-500 hover:border-red-600 rounded-full cursor-pointer">
                  <Icon.PlusCircle size={50} />
                </button>
              </div>
              {/* 投稿ボタン */}
              {/*ーーーーーーーーーーーーーーーーーーーーーーーーー */}
            </div>
            <Switch>
              <Route path="/"></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </React.Fragment >
  );
};
