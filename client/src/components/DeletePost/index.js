import React from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { deletePost } from '../../redux/actions/postsActions';
import './style.css';

const DeletePost = (props) => {
    const dispatch = useDispatch()
    const deleteOnClick = () => {
        const id = props.match.params.id;
        dispatch(deletePost(id))
            props.history.push('/posts');            
      
    }

    return (
        <div className="viewpost-wrapper deletepost-wrapper">
        <div className="deletepost-container">
            <div className="cancel-wrapper">
            <NavLink to ={`/viewpost/${props.id}`}
                    className="delete-link">
                        <i className="fas fa-times fa-2x"></i>
                        </NavLink>
            </div>
            <h3 className="warning">Are you sure you want to delete this post?</h3>
            <div className="buttons-wrapper">
                <NavLink to ='/posts' className="delete-link">
                <button 
                onClick={deleteOnClick} 
                className="btn-delete">
                    Delete</button>
                    </NavLink>    
            </div>
        </div>
        </div>
    )
}

export default DeletePost;


