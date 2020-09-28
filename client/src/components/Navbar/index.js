import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-links">
               <li>
        <NavLink to ="/" className="navbar-link">
            Home
        </NavLink>
        </li>  
        <li>
        <NavLink to ="/about" className="navbar-link">
            Blog Stats
        </NavLink>
        </li>
        <li>
        <NavLink to="/posts" className="navbar-link">
            Blog Posts
        </NavLink>
        </li>
     
        </ul>
    </div>
    )
}

export default Navbar;
