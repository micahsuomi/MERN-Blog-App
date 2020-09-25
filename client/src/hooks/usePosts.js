import { useEffect, useState, useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { searchPosts } from '../redux/actions/postsActions';

export default function usePosts(query) {
  const posts = useSelector(state => state.posts.posts);
  const filteredPosts = useSelector(state => state.posts.filteredPosts);
  const dispatch = useDispatch()
  console.log(filteredPosts)
    const [ data, setData ] = useState([]);
    const [ err, setErr] = useState(null);
    const [ notFound, setNotFound ] = useState('');

    useEffect(() => {
      setData(posts);
      
    }, [posts])

    useEffect(() => {
      filterPosts()
      
    }, [query])
    
    // useEffect(() => {
    //    setData(filteredPosts)
    //  }, [filteredPosts]);
  
    /*useEffect(() => {
           const getPosts = async () => {
               try {
                   const res = await axios.get('/posts')
                   setData(res.data)
                   setPosts(res.data)
                   setIsLoading(false)
                   
               }
               catch(err) {
                   setErr(err)
               }
           } 
           getPosts()
       
    }, [])*/
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
        console.log(results)
        dispatch(searchPosts(results))
      },
      [posts, query, dispatch],
    )

          

    return [err, data, notFound]
}
