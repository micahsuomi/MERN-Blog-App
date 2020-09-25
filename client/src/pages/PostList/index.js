import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import usePosts from '../../hooks/usePosts';
import { getPosts } from '../../redux/actions/postsActions';
import SearchForm from '../../components/SearchPost';
import PostItem from '../../components/PostItem';
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import './style.css';

const PostList = () => {

  const isLoading = useSelector(state => state.posts.isLoading);
  const [ query, setQuery ] = useState('');
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [ err, posts, notFound ] = usePosts(query);
  const [slicedPosts, setSlicedPosts] = useState([posts])
  // const [postList, setPostList] = useState([])

  const dispatch = useDispatch()

  
  useEffect(() => {
        dispatch(getPosts())
    
    }, [dispatch])

  

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
                            query={query}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                             />    
              
              <NavLink to='/addpost' 
              className="add-post-link">
                <i className="fas fa-plus-circle fa-2x"></i> 
                <span className="add">Add New</span>
                </NavLink>
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

export default PostList
