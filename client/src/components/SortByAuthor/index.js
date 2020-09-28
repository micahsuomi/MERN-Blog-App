import React from 'react';

import './style.css';

const SortByAuthor = ({ sortPosts }) => {
    return (
        <div
        className="cell__item grow"
      >
        <form className="cell__form">
          <label htmlFor="name">
            Posts by Author
            </label>
          <input
            type="checkbox"
            value="region"
            className="sort__input"
            onChange={sortPosts}
          />
        </form>
        <i class="fas fa-pen-nib"></i>
        {/* {isRegionReversing ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )} */}
      </div>
    )
}

export default SortByAuthor;
