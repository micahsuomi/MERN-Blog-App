import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import SearchForm from '../../components/SearchPost';
import PostItem from '../../components/PostItem';
import './style.css';

const PostList = ({ posts, query, setQuery }) => {
  const isLoading = useSelector(state => state.posts.isLoading);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // const [ err, posts, notFound ] = usePosts(query);
  // const [slicedPosts, setSlicedPosts] = useState([posts])
  // const [postList, setPostList] = useState([])

  const handleChange = (e) => {
     const search = e.target.value 
     setQuery(search);
   
   }

  const handleSubmit = (e) => {
    e.preventDefault();
       
  }

const postList = posts.map((post => (
  <PostItem key={post._id} post={post} />
)))

/*
    useEffect(() => {
      let slice = posts.slice(offset, offset + perPage); 
      const postList = slice.map((post => (
        <PostItem key={post._id} post={post} />
      )))
      setPageCount(Math.ceil(posts.length / perPage));  
      setPostList(postList)
    }, [posts])

    console.log(postList)*/

      
    const handlePageClick = (e) => {
          const selectedPage = e.selected;
          const offset = selectedPage * perPage
          setCurrentPage(selectedPage)
          setOffset(offset)
    }

   
        return (
            <div className="container-blog">
              <div className="posts-container">
                <SearchForm 
                  key={query}
                  query={query}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}/>    
              
              <div className="add-post-container">
                <NavLink to='/addpost' 
                className="add-post-link">
                <i className="fas fa-plus-circle fa-2x"></i> 
                <span className="add">Add New</span>
                </NavLink>
              </div>
                {
                 !isLoading ? 

               <div>
                <div> <h4 className="sub-header">
                 Total posts: {postList.length}</h4>
               </div>
                <div className="posts-wrapper"> 
                {postList}
                </div>  
                <div>
              
                  <ReactPaginate
                    style={currentPage ? currentStyle : test}
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
          </div>
              :
              <div className="loading-container">
              <div className="lds-circle"><div></div></div>
              <h1>Loading Blog Posts...</h1>
              </div>
              }

              {/* {
                props.errorMsg && !isLoading ? 'There was a problem with the connection. Please referesh the page' : ''  
              } */}

            </div>

            </div>

          )
}
       
const currentStyle = {backgroundColor: 'blue'}
const test = {backgroundColor: 'green'}

export default PostList;
