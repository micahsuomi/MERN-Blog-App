import React from 'react';

import './style.css';

const SortByCategory = ({ sortPosts }) => {
    return (
        <div
        className="cell__item grow"
      >
        <form className="cell__form">
          <label htmlFor="name">
            By Category
            </label>
          <input
            type="checkbox"
            value="region"
            className="sort__input"
            onChange={sortPosts}
          />
        </form>
        <i class="fas fa-quote-right"></i>
                
        {/* {isRegionReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )} */}
      </div>
    )
}

export default SortByCategory;
