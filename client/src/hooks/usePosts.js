import { useEffect, useState, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { searchPosts } from '../redux/actions/postsActions';

export default function usePosts(query) {
  const posts = useSelector(state => state.posts.posts);
  const filteredPosts = useSelector(state => state.posts.filteredPosts);
  const dispatch = useDispatch()
    const [ data, setData ] = useState([]);
    const [ err, setErr] = useState(null);
    const [ notFound, setNotFound ] = useState('');


    // useEffect(() => {
    //   console.log('i am calling')
    //   setData(posts)
    // }, [posts]);

    useEffect(() => {
      setData(posts)
      return () => {
        setData(false)

      }
    }, [posts, setData])

    useEffect(() => {
      console.log('Im the cone calling bitch')
        setData(filteredPosts)      
      }, [filteredPosts]);

    useEffect(() => {
      filterPosts()
    }, [query]);
    
   
  
    const filterPosts = useCallback(
      () => {
        const results = posts.filter((post) => {
          if(post.title.includes(query) || post.title.toLowerCase().includes(query) || 
          post.author.includes(query) || post.author.toLowerCase().includes(query) || 
          post.category.includes(query) || post.category.toLowerCase().includes(query)) {
            return post
    
          } else {
            setNotFound('No results')

          }
        }) 
        dispatch(searchPosts(results))
      },
      [posts, query, dispatch],
    )

          

    return [err, data, notFound]
}
