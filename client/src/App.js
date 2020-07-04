import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route, 
  Switch
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import DeletePost from './components/DeletePost';
import EditPost from './components/EditPost';
import ViewPost from './components/ViewPost';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url = 'http://localhost:5000/posts';
    axios.get(url)
    .then((response) => {
      console.log(response.data);
      this.setState({posts: response.data});
    })
  }

  addPost = (newPost) => {
    this.fetchData()
    this.setState({posts: [newPost, ...this.state.posts]})
    console.log(this.state.posts, newPost)
  }

  deletePost = () => {
  
    this.fetchData()
    // const unDeletedPosts = this.state.posts.filter((post) => post.id !== e.target.id)
    // this.setState({posts: unDeletedPosts})

  }
  

  editPost = (updatedPost) => {
    console.log(updatedPost)
    // const newPosts= this.state.posts.map((post) => {
    // return post.id === id ? newPost : post
    // })
    this.setState({updatedPost})

    console.log(updatedPost)
    this.fetchData()

    
    }


  render() {
    return (
      <BrowserRouter>
          <div className="wrapper App">
        <div className="container">
        <Navbar />

        <Switch>

        <Route path={`/viewpost/:id`} 
            component={(props)=><ViewPost 
            posts={this.state.posts} 
            id={props.match.params.id} 
            {...props}/>}/>

            <Route path={'/deletepost/:id'} 
            component={(props)=> <DeletePost 
            id={props.match.params.id}
            {...props}
            deletePost={this.deletePost}/>}/>

            <Route path={`/editpost/:id`} 
            component={(props)=><EditPost 
            {...props} 
            posts={this.state.posts} 
            id={props.match.params.id} 
            editPost={this.editPost}/>}/>

          <Route path="/posts" component={()=> <PostList
          posts={this.state.posts} />} />

          <Route path="/addpost" component={(props) => <AddPost
          {...props}
          addPost={this.addPost} />} />

          <Route path="/" component={Home} />
        </Switch>

        
      </div>
      </div>
        <Footer />

      </BrowserRouter>
    )
  }
}

export default App

