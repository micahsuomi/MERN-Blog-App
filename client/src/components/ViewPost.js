import React from 'react';
import '../assets/style/viewpost.css';
import {NavLink} from 'react-router-dom';

const ViewPost = (props) => {
    let {posts} = props;
    const id = props.match.params.id;

 
    let postStyles = [
        {backgroundColor: 'var(--blue)'},
        {backgroundColor: 'var(--yellow)'},
        {backgroundColor: 'var(--green)'},
        {backgroundColor: 'var(--violet)'},
        {backgroundColor: 'var(--brown)'}
    
    ]
    
   
    const filteredPosts = posts.find((post) => {
        return post._id === props.match.params.id
    })

    
    let index = 0;
    if(filteredPosts.category.toLowerCase().includes('work')) {
        postStyles = postStyles[index];
    } else if(filteredPosts.category.toLowerCase().includes('entertainment')) {
        index = index +1
        postStyles = postStyles[index]
    } else if(filteredPosts.category.toLowerCase().includes('travel')) {
        index = index +2
        postStyles = postStyles[index];
    }    else if(filteredPosts.category.toLowerCase().includes('sport')) {
        index = index +3
        postStyles = postStyles[index]
    } else {
        index = index +4
        postStyles = postStyles[index]

    }
    

  
    return (
        <div className="viewpost-wrapper" >
        <div className="viewpost-container">
            <div className="viewpost-header" style={postStyles}>
            <div className="back-to-top__btn__wrapper">
                <NavLink to="/posts" className="back-to-posts__link">
                <i className="far fa-arrow-alt-circle-left fa-2x"></i>
                <span className="back-to-posts__text">
                Back to Posts
                </span>
                    </NavLink>
            </div>
            </div>
            <div className="viewpost-header-container">
            <h3 className="viewpost-header">Title: {filteredPosts.title}</h3>
            <h3 className="viewpost-header">Author: {filteredPosts.author}</h3>
                <h3 className="viewpost-header">Category: {filteredPosts.category}</h3>
                </div>
               

                <div className="viewpost-body">
                <img src={filteredPosts.image} className="post-image__big" alt={filteredPosts.title}/>
                <p className="viewpost-description">{filteredPosts.description}</p>
            <div className="buttons-wrapper">
            <NavLink to={`/editpost/${id}`}> 
            <button id={id} className="btn-edit"> 
            Edit Post 
            </button>
            </NavLink>
            <NavLink to ={`/deletepost/${id}`}>
                <button className="btn-delete">
                    Delete</button>
                    </NavLink>
                    </div>


            </div>
            </div>

        </div>
    )
}

export default ViewPost;
