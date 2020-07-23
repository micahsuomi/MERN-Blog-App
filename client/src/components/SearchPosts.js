import React, { Component } from 'react';
import '../assets/style/searchposts.css'; 


class SearchPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            search: '',
            isUpdating: false,

        }
    }

    handleChange = (e) => {

        let { name, value } = e.target;
        this.setState({search: value})
        if(value.length < 1) {
          console.log('search is empty')
          this.props.emptySearch()
        }
       
       
      }
      handleSubmit = (e) => {
        e.preventDefault();
        // console.log('I am working from handlesubmit')
        this.setState({isUpdating : true})
       
        
        
    }

    refresh = () => {
        this.props.refresh()
    }
    
    componentDidUpdate() {
        console.log('update is calling', this.state.search.length)
        if(this.state.search.length >= 1 && this.state.isUpdating) {
          let newPostsArr = [];
      
          for(const posts of this.props.posts) {
              let { _id, title, author, category, image, description, createdAt } = posts;
              if(title.toLowerCase().includes(this.state.search) || author.toLowerCase().includes(this.state.search) || category.toLowerCase().includes(this.state.search)) {
                newPostsArr.push({_id, title, author, category, image, description, createdAt})
                  console.log(newPostsArr)
                  this.props.filterSearch(newPostsArr)
                  this.setState({isUpdating: false})
                  // this.state.filteredPosts.push(newPostsArr)
                 
        
              } 
             
               
          }
        }
        
      }
   
    
    render() {

        return (
            <div className="search-form__container">
                 <form className="search-form" onSubmit={this.handleSubmit}>
                <div className="search-container">
                  <input type="text"
                  name="post"
                  className="search-input"
                  value={this.state.text}
                  placeholder="search posts by title, author or category" 
                  onChange={this.handleChange}/>
                  <button className="search-btn">
                  <i className="fas fa-search fa-2x grow"></i>
                  </button>
                </div>
                </form>
                <div>
                <i class="fas fa-sync fa-2x refresh-btn grow" alt="refresh" onClick={this.refresh}></i>
                </div>
            </div>
        )
    }
}

export default SearchPosts;
