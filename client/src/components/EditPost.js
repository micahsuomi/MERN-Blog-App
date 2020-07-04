import {NavLink} from 'react-router-dom';
import React, { Component } from 'react'
import '../assets/style/addpost.css';
import '../assets/style/editpost.css';
import validator from 'validator';
import axios from 'axios';

const Feedback = props => <p style={{color: 'red'}}>{props.error}</p>


class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
                post: {
                   title: '',
                   author: '',
                   category: '',
                   description: '',
                   image: ''
                 },
                 touched: {
                    title: false,
                    author: false,
                    description: false
                }
                 
        }
       
    }

     handleSubmit = (e) => {
         e.preventDefault();
         const id = this.props.match.params.id;
         console.log(id)
         const url = `http://localhost:5000/posts/editpost/${id}`
         const updatedPost = this.state.post;
         console.log(updatedPost)
         axios.put(url, updatedPost).then(response => {
             console.log(response)
         })
         this.props.editPost(updatedPost);
         this.props.history.push(`/posts`);
     }

    
    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
        
    }

    handleBlur = (e) => {
        const {name} = e.target;
        this.setState({
            touched: {...this.state.touched, [name] : true}})
            console.log('blurring')

    }

    validate = () => {
        const errors = {
            title: '',
            author: '',
            category: ''
        }
            if(
                this.state.touched.title &&
                !validator.isLength(this.state.post.title, {min: 3, max: 30})
              )  {
                errors.title = 'Title must be between 3 and 20 characters';
                console.log(errors.title)
                
            } if(
                this.state.touched.author &&
                !validator.isLength(this.state.post.author, {min: 3, max: 15})
              )  {
                errors.author = 'Title must be between 3 and 20 characters';
                
            } if(
                this.state.touched.description && 
                !validator.isLength(this.state.post.description, {min: 3})
            ) {
                errors.description = 'Description must contain at least 3 characters';
        }
        
       
            return errors
}

  
    componentDidMount() {
        const url = `http://localhost:5000/posts`
        const id = this.props.match.params.id;
        axios.get(url).then(response => {
            let filteredPost = response.data.find((post) => post._id === id);
            this.setState({post: filteredPost})
        })
      
    }
    render() {
        
        let {title, author, category, description, image} = this.state.post;
        const errors = this.validate();

        return (
            <div className="edit-post__container">
            <form onSubmit={this.handleSubmit} className="edit-form">
            <div className="inputs-wrapper">
            <input type="text" 
            className="edit-input"
            name="title" 
            value={title}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            required={true}/>

            <input type="text" 
            className="edit-input"
            name="author" 
            value={author}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            required={true}/>


            <select 
            name="category" 
            value={category} 
            onChange={this.handleChange}
            required={true}
            className="edit-input">
                <option value=''>----Select Category</option>
                <option value='Work'>Work</option>
                    <option value='Entertainment'>Entertainment</option>
                    <option value='Travel'>Travel</option>
                    <option value='Sport'>Sport</option>
                    <option value='Other'>Other</option>
            </select>
            </div>
            {errors.title ? <Feedback error={errors.title} /> : ''}

            <label>Insert Image Link</label>
            <input type="text" 
            name="image"
            value={image}
            placeholder="insert image link" 
            onChange={this.handleChange}/>
            
            <textarea type="text" 
            name="description" 
            value={description}
            onChange={this.handleChange}
            onBlur={this.handleBlur} 
            required={true}/>
            {errors.description ? <Feedback error={errors.description} /> : ''}

            <div className="buttons-wrapper">
            <button className="btn-save">Save</button>
            <NavLink to ="/posts" className="nav-cancel">
                <button className="btn-cancel">
                    Cancel
                    </button></NavLink>
            </div>

            
        </form>
            </div>
        )
    }
}

export default EditPost
