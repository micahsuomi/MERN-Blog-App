const express = require("express");
const Router = express.Router();
const {
  getAllPosts,
  getPost,
  addPost,
  editPost,
  deletePost,
} = require("../controller/controllers");

Router.get("/api/v1/posts", getAllPosts);
Router.get("/api/posts/:id", getPost);
Router.post("/api/v1/posts", addPost);
Router.put("/api/v1/posts/:id", editPost);
Router.delete("/api/v1/posts/:id", deletePost);

module.exports = Router;
