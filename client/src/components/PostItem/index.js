import React from 'react';
import { NavLink } from 'react-router-dom';

import useStyles from '../../hooks/useStyles';
import './style.css';

const PostItem = (props) => {
    const [stylesPosts, stylesIcons] = useStyles(props.post)
    let {_id, title, author, category, image, description, createdAt} = props.post;
    
    return (

            <div className="post-item__container" >
            <div className="post-item__wrapper">
                <div className="view-container">
                <NavLink to={`/viewpost/${_id}`} className="link grow">
                <span className="read">  
                Read 
                </span>          
                     </NavLink>
                </div>
                <div className="post-body">
                <h4 className="post-title">{title}</h4>
                <p className="post-author">Author: {author}</p>
                <div className="post-image">
                <img src={image} alt="blog post pic"/>
                </div>
                <p className="post-date">{createdAt}</p>
                <p className="post-description">{description.substring(0, 150)}...</p>
                <div className="category-wrapper" style={stylesPosts}>
                <h3 className="post-category">{category}</h3>
                <i className={stylesIcons}></i>
                </div>
                </div>
                
            </div>
            </div>
           

    )
}

export default PostItem;