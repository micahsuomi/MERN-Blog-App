import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import SearchForm from "../../components/SearchPost";
import PostItem from "../../components/PostItem";
import Pagination from "../../components/Pagination";

import "./style.css";

const PostList = ({ err, posts, query, setQuery, reloadPosts }) => {
  const isLoading = useSelector((state) => state.posts.isLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  //get current posts
  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexFirstPost, indexLastPost);
  const [showPullToRefresh, setShowPullToRefresh] = useState(false);

  const handleChange = (e) => {
    const search = e.target.value;
    setQuery(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const postList = currentPosts.map((post) => (
    <PostItem key={post._id} post={post} />
  ));
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-blog">
      <div className="posts-container">
        <SearchForm
          key={query}
          query={query}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        {!isLoading ? (
          <div>
            <div>
              <h4 className="sub-header">Total posts: {postList.length}</h4>
            </div>
            <div className="posts-wrapper">{postList}</div>
            {/* {search === "" && ( */}
            <Pagination
              itemsPerPage={postsPerPage}
              totalItems={posts?.length}
              currentPage={currentPage}
              paginate={paginate}
            />
            {/* )} */}
          </div>
        ) : (
          <div>
            {err ? (
              <div>
                'There was a problem with the connection. Please referesh the
                page' : ''
              </div>
            ) : (
              <div className="loading-container">
                <div className="lds-circle">
                  <div></div>
                </div>
                <h1>Loading Blog Posts...</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
