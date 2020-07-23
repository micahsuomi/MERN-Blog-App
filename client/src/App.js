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
            posts: [],
            filteredPosts: [],
            search: '',
            name: 'search',
            isLoading: true,
            errorMsg: false
            
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
      this.setState({posts: response.data, isLoading: false}
        )})
      .catch(err => {
        console.log(err)
        this.setState({errorMsg: true})
      })
    
  }



  addPost = (newPost) => {
    this.fetchData()
    this.setState({posts: [newPost, ...this.state.posts]})
  }

  

  deletePost = () => {
    this.fetchData()
  
  }
  

  editPost = (updatedPost) => {
    this.setState({updatedPost})
    this.fetchData()

    
    }
  emptySearch = () => {
    console.log('calling from app')
    this.fetchData();
  }

  refresh = () => {
    this.fetchData();
  }

  filterSearch = (newPostArr) => {
    console.log('filter search from app', newPostArr)
    this.setState({posts: newPostArr})
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

            <Route path={"/posts"} 
            component={(props)=><PostList 
            key={props.match.params.id}
            posts={this.state.posts}
            isLoading={this.state.isLoading}
            errorMsg={this.state.errorMsg}
            emptySearch={this.emptySearch}
            filterSearch={this.filterSearch}
            refresh={this.refresh}
            {...props} 

            
           />} />

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
