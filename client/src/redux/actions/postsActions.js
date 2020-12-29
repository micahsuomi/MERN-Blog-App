import axios from "axios";

import {
  GET_POSTS,
  ADD_POST,
  GET_POST,
  EDIT_POST,
  DELETE_POST,
  SEARCH_POSTS,
} from "./types";

// const proxy = 'http://localhost:5000'
const proxy = 'https://mern-blogsite-app.herokuapp.com'

export const getPosts = () => (dispatch) => {
  const url = '/api/v1/posts';
  axios
    .get(`${proxy}${url}`)
    .then((res) =>   
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )

    .catch((error) => {
      console.log(error);
    });
};

export const addPost = (post) => (dispatch) => {
  const url = "/api/v1/posts";
  axios
    .post(`${proxy}${url}`, post)
    .then((res) =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch((error) => {
      console.log(error);
    });
};

export const getPost = (id) => (dispatch) => {
  const url = `/api/v1/posts`;
  axios
    .get(`${proxy}${url}`)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data.find((post) => post._id === id),
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
export const editPost = (id, updatedPost) => (dispatch) => {
  const url = `/api/v1/posts/${id}`;

  axios
    .put(`${proxy}${url}`, updatedPost)
    .then((res) =>    
      dispatch({
        type: EDIT_POST,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const deletePost = (id) => (dispatch, getState) => {
  const url = `/api/v1/posts/${id}`;

  axios
    .delete(`${proxy}${url}`, getState)
    .then((res) =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};

export const searchPosts = (filteredResults) => {
  return {
    type: SEARCH_POSTS,
    payload: filteredResults,
  };
};
