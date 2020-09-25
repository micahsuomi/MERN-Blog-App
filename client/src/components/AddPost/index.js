import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addPost } from '../../redux/actions/postsActions';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import './style.css';


const Feedback = props => <p style={{color: 'red'}}>{props.error}</p>
const AddPost = (props) => {
    const dispatch = useDispatch()

    const [ post, setPost ] = useState({
                title: '',
                author: '',
                category: '',
                description: '',
                image: ''
    })
    const [ touched, setTouched ] = useState({
                title: false,
                auhtor: false,
                description: false
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(post))
        props.history.push('/posts');            

    }

  
    

    const handleBlur = (e) => {
        const {name} = e.target;
        setTouched({
            touched: {...touched, [name] : true}})

    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        setPost({...post, 
            [name]: value})
       

    }

    const validate = () => {
        const errors = {
            title: '',
            author: '',
            category: '',
            description: ''
        }
            if(
                touched.title &&
                !validator.isLength(post.title, {min: 3, max: 30})
              )  {
                errors.title = 'Title must be between 3 and 25 characters';
                console.log(errors.title)
                
            } 
            if(
                touched.author &&
                !validator.isLength(post.title, {min: 3, max: 30})
              )  {
                errors.title = 'Author must be between 3 and 20 characters';
                console.log(errors.title)
                
            }
            if(
                touched.description && 
                !validator.isLength(post.description, {min: 3})
            ) {
                errors.description = 'Description must contain at least 3 characters';
        }
        
       
            return errors
}

        let { title, author, category, description } = post;
        const errors = validate();

        return (
            <div className="add-post__container">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-topics">
                    <label className="title-category">Title</label>
                    <div>
                    <input type="text" name="title"
                    value={title} placeholder="title" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}/>
                    {errors.title ? <Feedback error={errors.title} /> : ''}
                    </div>

                    <label className="title-category">Author</label>
                    <div>
                    <input type="text" name="author"
                    value={author} placeholder="author" 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={true}/>
                    {errors.author ? <Feedback error={errors.author} /> : ''}
                    </div>

    
                    <div className="input-topics">
                    <label className="title-category">Category</label>
                     <select name="category" value={category} 
                     onChange={handleChange}
                     required={true}>
                        <option value=''>---Select Category</option>
                        <option value='Work'>Work</option>
                        <option value='Entertainment'>Entertainment</option>
                        <option value='Culture'>Culture</option>
                        <option value='Travel'>Travel</option>
                        <option value='Sport'>Sport</option>
                        <option value='Other'>Other</option>
                    </select>
                    </div>
                    </div>
                    
                    <label>Insert Image Link</label>
                    <input type="text" 
                    name="image"
                    placeholder="insert image link" 
                    onChange={handleChange}/>
                    
                    <label>Write a New Post</label>
                    <textarea type="text" 
                    name="description"
                    category={description} 
                    placeholder="write here" 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    required={true}/>
                    {errors.description ? <Feedback error={errors.description} /> : ''}
                   
                    <div className="buttons-wrapper">
                    <button className="btn-save">Save</button>
                    <NavLink to ="/posts" className="btn-cancel">
                        Cancel
                        </NavLink>
                    </div>
    
    
                </form>
            </div>
        )
    }
    
    

export default AddPost;