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
         const url = `/posts/editpost/${id}`
         const updatedPost = this.state.post;
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
            <form className="edit-form" onSubmit={this.handleSubmit}>
                <div className="input-topics">
                <label className="title-category">Title</label>
                <div>
                <input type="text" name="title"
                value={title} placeholder="title" 
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                required={true}/>
                {errors.title ? <Feedback error={errors.title} /> : ''}
                </div>

                <label className="title-category">Author</label>
                <div>
                <input type="text" name="author"
                value={author} placeholder="author" 
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                required={true}/>
                {errors.author ? <Feedback error={errors.author} /> : ''}
                </div>


                <div className="input-topics">
                <label className="title-category">Category</label>
                 <select name="category" value={category} 
                 onChange={this.handleChange}
                 required={true}>
                    <option value=''>---Select Category</option>
                    <option value='Work'>Work</option>
                    <option value='Entertainment'>Entertainment</option>
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
                onChange={this.handleChange}/>
                
                <label>Write a New Post</label>
                <textarea type="text" 
                name="description"
                category={description} 
                placeholder="write here" 
                onChange={this.handleChange}
                onBlur={this.handleBlur} 
                value={description}
                required={true}/>
                {errors.description ? <Feedback error={errors.description} /> : ''}
               
                <div className="buttons-wrapper">
                <button onClick={this.addPost} className="btn-save">Save</button>
                <NavLink to ="/posts" className="btn-cancel">
                    Cancel
                    </NavLink>
                </div>


            </form>
        </div>
        )
    }
}

export default EditPost
