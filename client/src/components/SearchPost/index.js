import React from 'react';

import './style.css'; 

const SearchPosts = ({ handleSubmit, handleChange, query }) => {

        return (
            <div className="search-form__container">
                 <form className="search-form" onSubmit={handleSubmit} key="rand1">
                <div className="search-container">
                  <input type="text"
                  key="rand1"
                  name="post"
                  component="text"
                  className="search-input"
                  value={query}
                  placeholder="search posts by title, author or category" 
                  onChange={handleChange}/>
                  <i className="fas fa-search fa-2x search-icon"></i>
                </div>
                </form>
            </div>
        )
    
}

export default SearchPosts;
