import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__links navbar__links--left">
        <li>
          <NavLink
            to="/"
            className="navbar-link"
            activeStyle={{ color: "var(--secondary)" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="navbar-link"
            activeStyle={{ color: "var(--secondary)" }}
          >
            Blog Stats
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/posts"
            className="navbar-link"
            activeStyle={{ color: "var(--secondary)" }}
          >
            Blog Posts
          </NavLink>
        </li>
      </ul>
      <ul className="navbar__links navbar__links--right">
        <li>
          <NavLink
            to="/addpost"
            className="add-post-link"
            activeStyle={{ color: "var(--secondary)" }}
          >
            <i className="fas fa-pen"></i>
            <span className="add">Add New</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
