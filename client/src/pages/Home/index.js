import React from "react";

import { NavLink } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h1 className="app-title">Blog MERN App</h1>
        <h3 className="app-subtitle">
          A Blog App With React, Redux and Node
        </h3>
        <NavLink to="/posts" className="read-blog__link">
          Read Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
