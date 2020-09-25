const express = require('express');
const Router = express.Router();
const {
    getAllPostsAPI,
    getPostAPI, 
    addPost,
    editPost,
    deletePost
} = require('../controller/controllers');

Router.get('/posts', getAllPostsAPI);
Router.get('/viewpost/:id', getPostAPI);
Router.post('/posts', addPost);
Router.put('/posts/editpost/:id', editPost);
Router.delete('/posts/:id', deletePost)

module.exports = Router;

