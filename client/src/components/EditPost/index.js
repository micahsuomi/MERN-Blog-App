import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import validator from 'validator';

import { getPost, editPost } from '../../redux/actions/postsActions';
import '../AddPost/style.css';
import './style.css';

const Feedback = props => <p style={{color: 'red'}}>{props.error}</p>

const EditPost = (props) => {
    const dispatch = useDispatch()
    const [ singlePost, setSinglePost ] = useState();
    const filteredPost = useSelector(state => state.posts.post);


    console.log(filteredPost)
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
         const id = props.match.params.id;
        console.log(id, post)
        dispatch(editPost(id, post))
        props.history.push(`/posts`);
     }

    
    const handleChange = (e) => {
        let {name, value} = e.target;
        setPost({...post, [name] : value})
        
    }

    const handleBlur = (e) => {
        const {name} = e.target;
            setTouched({...touched, [name] : true})
    }

    const validate = () => {
        const errors = {
            title: '',
            author: '',
            category: ''
        }
            if(
                touched.title &&
                !validator.isLength(post.title, {min: 3, max: 30})
              )  {
                errors.title = 'Title must be between 3 and 20 characters';
                console.log(errors.title)
                
            } if(
                touched.author &&
                !validator.isLength(post.author, {min: 3, max: 15})
              )  {
                errors.author = 'Title must be between 3 and 20 characters';
                
            } if(
                touched.description && 
                !validator.isLength(post.description, {min: 3})
            ) {
                errors.description = 'Description must contain at least 3 characters';
        }
        
       
            return errors
    }


    useEffect(() => {
        dispatch(getPost(props.match.params.id))
        console.log(filteredPost)

    }, [dispatch])

    useEffect(() => {
        setPost(filteredPost)

    }, [filteredPost])

    console.log(post)


        let { title, author, category, description, image } = post;
        const errors = validate();

        return (
            <div className="edit-post__container">
            <form className="edit-form" onSubmit={handleSubmit}>
                <div className="input-topics">
                <label className="title-category">Title</label>
                <div>
                <input type="text" name="title"
                value={title} 
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
                value={image}
                onChange={handleChange}/>
                
                <textarea type="text" 
                name="description"
                category={description} 
                placeholder="write here" 
                onChange={handleChange}
                onBlur={handleBlur} 
                value={description}
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
    


export default EditPost
