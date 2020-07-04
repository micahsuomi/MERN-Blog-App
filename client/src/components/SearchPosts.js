import React, { Component } from 'react';
import {blogData} from './blogData'
import '../assets/style/searchposts.css'; 


export class SearchPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredPosts: [],
            posts: blogData,
            value: '',
            search: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let newPostsArr = []

 
        for(const posts of this.state.posts) {
            let {id, title, category} = posts;

            if(title.toLowerCase().match(this.state.search)) {
                newPostsArr.push({id, title, category})
                
                this.state.filteredPosts.push(newPostsArr)
                let newPosts = this.state.filteredPosts
                console.log(newPosts)
                this.props.filterResult(newPosts)

            } else {
                console.log('post not found')
            }
             
        }
        

        
    }
    handleChange = (e) => {
        let {value, name} = e.target;
        this.setState({search: value})
       
    }
    render() {
        return (
            <div>
                 <form className="search-form" onSubmit={this.handleSubmit}>
                <div className="search-container">
                  <input type="text"
                  name="post"
                  className="search-input"
                  value={this.state.text}
                  placeholder="search posts by title or category" 
                  onChange={this.handleChange}/>
                  <button className="search-btn">
                  <i className="fas fa-search fa-2x"></i>
                  </button>
                </div>
                </form>
            </div>
        )
    }
}

export default SearchPosts;
