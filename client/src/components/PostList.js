import React from 'react';
import SearchForm from '../components/SearchPosts';
import PostItem from './PostItem';
import '../assets/style/postlist.css';
import {NavLink} from 'react-router-dom';


const PostList = (props) => {
  // console.log('this is the search', props.search)
  let postList = props.posts.map((post) => (
    <PostItem key={post._id} post={post} />
  ))

  const emptySearch = () => {
    props.emptySearch()
  }
  const filterSearch = (newPostsArr) => {
    props.filterSearch(newPostsArr)

  }
  const refresh = () => {
    props.refresh()
  }
 
          return (
            <div className="container-blog">
              <div className="blog-header__container">
                <div className="blog-header__wrapper">
            <h1 className="blog-header">Blog Posts</h1>
            <div className="blog-sub__container">
             <h4 className="sub-header">
               Total posts: {props.posts.length}</h4>
              </div>
              </div>
              </div>
              <div className="posts-container">

                <SearchForm posts={props.posts}
                            emptySearch={emptySearch}
                            filterSearch={filterSearch}
                            refresh={refresh} />    
              
              <NavLink to='/addpost' 
              className="add-post-link">
                <i className="fas fa-plus-circle fa-2x"></i> 
                <span className="add">Add New</span>
                </NavLink>
                {!props.isLoading ? 

            <div className="posts-wrapper">

               {postList}
            </div>

              :
              <div className="loading-container">
              <div className="lds-circle"><div></div></div>
              <h1>Loading Blog Posts...</h1>
              </div>


              }

              {
                props.errorMsg ? 'There was a problem with the connection. Please referesh the page' : ''  
              }

            </div>

            </div>

    

          )
}
       
export default PostList
