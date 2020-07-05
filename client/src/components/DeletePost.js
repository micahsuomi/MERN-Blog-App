import React from 'react'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import '../assets/style/deletepost.css';


const DeletePost = (props) => {
    const {id} = props;
    const deletePost = () => {
        const id = props.match.params.id;
        const url = `http://localhost:5000/posts/deletepost/${id}`;
        console.log(id)
        axios.delete(url).then(response => {
          console.log('deleted')
        })
        props.history.push('/posts')
        props.deletePost();
    }



    return (
        <div className="viewpost-wrapper deletepost-wrapper">
        <div className="deletepost-container">
            <div className="cancel-wrapper">
            <NavLink to ={`/viewpost/${id}`}
                    className="delete-link">
                        <i class="fas fa-times fa-2x"></i>
                        </NavLink>
            </div>
            <h3 className="warning">Are you sure you want to delete this post?</h3>
            <div className="buttons-wrapper">
                <NavLink to ='/posts' className="delete-link">
                <button 
                onClick={deletePost} 
                className="btn-delete">
                    Delete</button>
                    </NavLink>
                
              
            </div>
        </div>
        </div>
    )
}

export default DeletePost;


