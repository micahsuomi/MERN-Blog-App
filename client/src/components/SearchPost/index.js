import React from 'react';

import './style.css'; 


const SearchPosts = ({ handleSubmit, query, handleChange}) => {
 
  /*
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
   */
    

        return (
            <div className="search-form__container">
                 <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-container">
                  <input type="text"
                  name="post"
                  className="search-input"
                  value={query}
                  placeholder="search posts by title, author or category" 
                  // onChange={(e)=>setQuery(e.target.value)}
                  onChange={handleChange}
                  />
                  <button className="search-btn">
                  <i className="fas fa-search fa-2x grow"></i>
                  </button>
                </div>
                </form>
            </div>
        )
    
}

export default SearchPosts;
