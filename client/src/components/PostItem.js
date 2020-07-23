import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/style/postitem.css';


const PostItem = (props) => {
    let {_id, title, author, category, image, description, createdAt} = props.post;
    let postStyles = [
        {backgroundColor: 'var(--blue)'},
        {backgroundColor: 'var(--yellow)'},
        {backgroundColor: 'var(--purple)'},
        {backgroundColor: 'var(--green)'},
        {backgroundColor: 'var(--violet)'},
        {backgroundColor: 'var(--brown)'}
    
    ]

    
    let iconStyles = {
        work: 'fas fa-network-wired',
        entertainment: 'fas fa-hamburger',
        culture: 'fas fa-palette',
        travel: 'fas fa-mountain',
        sport: 'fas fa-football-ball',
        other: 'fas fa-hourglass-start',


    }

    
    let index = 0;

    
    if(category.toLowerCase().includes('work')) {
        postStyles = postStyles[index];
        iconStyles = iconStyles.work;

    } else if(category.toLowerCase().includes('entertainment')) {
        index = index +1
        postStyles = postStyles[index]
        iconStyles = iconStyles.entertainment;

    } else if(category.toLowerCase().includes('culture')) {
        index = index +2
        postStyles = postStyles[index]
        iconStyles = iconStyles.culture;

    } else if(category.toLowerCase().includes('travel')) {
        index = index +3
        postStyles = postStyles[index];
        iconStyles = iconStyles.travel;

    }    else if(category.toLowerCase().includes('sport')) {
        index = index +4
        postStyles = postStyles[index];

        iconStyles = iconStyles.sport;

    } else {
        index = index +4
        postStyles = postStyles[index];
        iconStyles = iconStyles.other;


    }
    return (

            <div className="post-item__container grow" >
            <div className="post-item__wrapper">
                <div className="view-container">
                <NavLink to={`/viewpost/${_id}`} className="link">
                <span className="read">  
                Read 
                </span>          
                     </NavLink>
                </div>
                <h4 className="post-title">{title}</h4>
                <p className="post-author">Author: {author}</p>
                <img src={image} className="post-image__small" alt="blog post pic"/>
                <p className="post-date">{createdAt}</p>
                <p className="post-description">{description.substring(0, 150)}...</p>
                <div className="category-wrapper" style={postStyles}>
                <h3 className="post-category">{category}</h3>
                <i className={iconStyles}></i>
                </div>
                
            </div>
            </div>
           

    )
}

export default PostItem;