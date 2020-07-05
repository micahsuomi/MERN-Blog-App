import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import AddPost from './components/AddPost';
import PostList from './components/PostList';
import ViewPost from './components/ViewPost';
import DeletePost from './components/DeletePost';
import EditPost from './components/EditPost';
import Footer from './components/Footer';
import axios from 'axios';


import {BrowserRouter,
  Route,
  Switch,

} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
            posts: []
            
          }

  }

  searchResult = () => {
    console.log('connected')

  }

    //to fetch the data from the MONGODB database with axios
  componentDidMount() {
    this.fetchData()
  }
 
  fetchData = () => {
    const url = '/posts';
    axios.get(url)
    .then(response => {
      console.log(response.data)
      this.setState({posts: response.data}
        )})
    
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

    return  (
      <BrowserRouter>

      <div className="wrapper App">
        <div className="container">
          <Navbar />
        
            <Switch>
            <Route path={"/addpost"} 
            component={(props)=><AddPost 
            {...props} 
            addPost={this.addPost}/>} />

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

            <Route path="/posts" component={()=><PostList 
            posts={this.state.posts}
            seachResult={this.searchResult}/>} />

            <Route path="/about" component={About} />


            <Route path="/" component={Home} />

            </Switch>


      </div>
      </div>
      <Footer />
      </BrowserRouter>

    );
  }
  }


export default App;
