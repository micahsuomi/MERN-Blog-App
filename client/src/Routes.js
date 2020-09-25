import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'

import { getPosts } from './redux/actions/postsActions'; 
import usePosts from './hooks/usePosts';
import Navbar from './components/Navbar/index';
import Home from './pages/Home/index';
import About from './pages/About/index';
import AddPost from './components/AddPost/index';
import PostList from './pages/PostList/index';
import ViewPost from './components/ViewPost/index';
import DeletePost from './components/DeletePost/index';
import EditPost from './components/EditPost/index';
import Footer from './components/Footer/index';

import './App.css';

import {
  Route,
  Switch,

} from 'react-router-dom';

const Routes = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    console.log(posts)
    return  (
     

      <div className="wrapper App">
        <div className="container">
          <Navbar />
       
            <Switch>
            <Route path={"/addpost"} 
            component={(props)=><AddPost 
            {...props} />} />

            <Route path={`/viewpost/:id`} 
            component={(props)=> (
            <ViewPost 
            id={props.match.params.id} 
            posts={posts}
            {...props}/>
            )}/>

            <Route path={'/deletepost/:id'} 
            component={(props)=> <DeletePost 
            id={props.match.params.id}
            {...props} />}/>

            <Route path={`/editpost/:id`} 
            component={(props)=><EditPost 
            {...props} 
            id={props.match.params.id} />}/>

            <Route path={"/posts"} 
            component={(props)=>
            <PostList 
            key={props.match.params.id}
            {...props} 
           />}/>

            <Route path="/about" component={About} />

            <Route path="/" component={Home} />

            </Switch>
            <Footer />

            
      </div>
      </div>

    )
            
  }


export default Routes;
