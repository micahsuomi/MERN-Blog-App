import axios from 'axios';

import {
    GET_POSTS,
    ADD_POST,
    GET_POST,
    EDIT_POST,
    DELETE_POST,
    SEARCH_POSTS
} from './types';

export const getPosts = () => dispatch => {
    const url = '/posts';  
        axios.get(url)
        .then((res) => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(error => {
            console.log(error)
        })

}

export const addPost = (post) => (dispatch) => {
    const url = '/posts';
        axios.post(url, post)
        .then((res) =>         
        dispatch({
             type: ADD_POST,
             payload: res.data
         })
        )
        .catch(error => {
            console.log(error)
        })
    
}

export const getPost = (id) => dispatch => {
    const url = `/posts`
    axios.get(url).then(res => dispatch({
        type: GET_POST,
        payload: res.data.find((post) => post._id === id)
       }))
       .catch((err) => {
           console.log(err)
       })
}
export const editPost = (id, updatedPost) => dispatch => {
    const url = `/posts/${id}`
    console.log(updatedPost)
    
         axios.put(url, updatedPost).then(res => dispatch({
            type: EDIT_POST,
            payload: res.data
         }))
         .catch((err) => {
             console.log(err)
         })
    
}

export const deletePost = (id) => (dispatch, getState) => {
    const url = `/posts/${id}`;
        console.log('from actions', id)

        axios.delete(url, getState).then((res) => dispatch({
         type: DELETE_POST,
         payload: id
        }))
        .catch((err) => {
            console.log(err)
        })
    
}

export const searchPosts = (filteredResults) => {
    return {
        type: SEARCH_POSTS,
        payload: filteredResults

    }
 
    
    
}
/*
export function fetchPosts() {
    const url = '/posts';
    return async (dispatch) => {
        const res = await axios.fetch(url)
        console.log(res)
        const posts = await res.json()
        console.log(posts)
        dispatch(getPosts(posts))
    }
}*/