import React from 'react';

import SortByAuthor from '../../components/SortByAuthor';
import SortByCategory from '../../components/SortByCategory';
import './style.css';

const About = ({ sortPosts, sortByAuthor, sortByCategory, isLoading }) => {
    
    return (
        <div className="about-container">
            <div className="about-header">
            <h2 className="about-title">Blog Stats</h2>
            </div>
            <div className="about-body">
                {
                    isLoading ? 
                    <div>
                    <div className="sorting-container">
                    <SortByAuthor sortPosts={sortPosts()}/>
                    { 
                        sortByAuthor.map((author, i) => (
                            <div key={i} className="sorted-container">
                            <p>{author.author}</p>
                            <i class="fas fa-chart-bar"></i>
                            <p>Posts: {author.posts}</p>
                            </div>
                        ))
                        }  
                    </div>

                        <div className="sorting-container">
                        <SortByCategory sortPosts={sortPosts}/>
                        { 
                            sortByCategory.map((category, i) => (
                                <div key={i} className="sorted-container">
                                <p>{category.category}</p>
                                <i class="fas fa-chart-bar"></i>
                                <p>Posts: {category.posts}</p>
                                </div>
                            ))
                        } 
                    </div>
                    </div> 
                    :
                    <div className="loading-container">
                    <div className="lds-circle"><div></div></div>
                    <h1>Loading Stats...</h1>
                    </div>

                }
      
            </div>
        </div>
    )
}

export default About;
