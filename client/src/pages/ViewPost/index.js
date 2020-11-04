import React from "react";
import { NavLink } from "react-router-dom";

import useStyles from "../../hooks/useStyles";
import "./style.css";

const ViewPost = (props) => {
  let { posts } = props;
  const id = props.match.params.id;

  const filteredPosts = posts.find((post) => {
    return post._id === props.match.params.id;
  });
  const [styleColor] = useStyles(filteredPosts);

  return (
    <div className="viewpost-wrapper">
      <div className="viewpost-container">
        <div className="viewpost-header" style={styleColor}>
          <div className="back-to-top__btn__wrapper">
            <NavLink to="/posts" className="back-to-posts__link">
              <i className="far fa-arrow-alt-circle-left fa-2x"></i>
              <span className="back-to-posts__text">Back to Posts</span>
            </NavLink>
          </div>
        </div>
        <div className="viewpost-header-container">
          <h3 className="viewpost-header">Title: {filteredPosts.title}</h3>
          <h3 className="viewpost-header">Author: {filteredPosts.author}</h3>
          <h3 className="viewpost-header">
            Category: {filteredPosts.category}
          </h3>
        </div>
        <div className="viewpost-body">
          <img
            src={filteredPosts.image}
            className="post-image"
            alt={filteredPosts.title}
          />
          <p className="viewpost-description">{filteredPosts.description}</p>
          <div className="buttons-wrapper">
            <NavLink to={`/editpost/${id}`}>
              <button id={id} className="btn-edit">
                Edit Post
              </button>
            </NavLink>
            <NavLink to={`/deletepost/${id}`}>
              <button className="btn-delete">Delete</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
