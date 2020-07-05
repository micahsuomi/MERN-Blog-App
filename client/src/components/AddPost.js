import React, {Component} from 'react';
import '../assets/style/addpost.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';

const Feedback = props => <p style={{color: 'red'}}>{props.error}</p>
class AddPost extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            post: 
                {
                    title: '',
                    author: '',
                    category: '',
                    description: '',
                    image: ''
                },
                touched: {
                    title: false,
                    auhtor: false,
                    description: false
                }
         
        }
    }

     handleSubmit = (e) => {
        e.preventDefault();
        const newPost = this.state.post;
        const url = '/posts';
        console.log(url)
        axios.post(url, newPost).then((response) => {
            console.log('saved')
        }).catch(error => {
            console.log(error.message)
        })
        this.props.addPost(newPost)
        this.props.history.push('/posts');


      
    }

    handleBlur = (e) => {
        const {name} = e.target;
        this.setState({
            touched: {...this.state.touched, [name] : true}})

    }

    handleChange = (e) => {
        let {name, value} = e.target;
        const post = {...this.state.post,[name]: value}
        this.setState({post})
       

    }

    validate = () => {
        const errors = {
            title: '',
            author: '',
            category: '',
            description: ''
        }
            if(
                this.state.touched.title &&
                !validator.isLength(this.state.post.title, {min: 3, max: 30})
              )  {
                errors.title = 'Title must be between 3 and 25 characters';
                console.log(errors.title)
                
            } 
            if(
                this.state.touched.author &&
                !validator.isLength(this.state.post.title, {min: 3, max: 30})
              )  {
                errors.title = 'Author must be between 3 and 20 characters';
                console.log(errors.title)
                
            }
            if(
                this.state.touched.description && 
                !validator.isLength(this.state.post.description, {min: 3})
            ) {
                errors.description = 'Description must contain at least 3 characters';
        }
        
       
            return errors
}
    render() {

        let {title, author, category, description} = this.state;
        const errors = this.validate();

        return (
            <div className="add-post__container">
                <form className="form" onSubmit={this.handleSubmit}>
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
                    onChange={this.handleChange}/>
                    
                    <label>Write a New Post</label>
                    <textarea type="text" 
                    name="description"
                    category={description} 
                    placeholder="write here" 
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} 
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
    

export default AddPost;