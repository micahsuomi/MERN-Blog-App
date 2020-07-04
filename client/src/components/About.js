import React from 'react';
import '../assets/style/about.css';
import img1 from '../assets/imgs/html-logo.png';
import img2 from '../assets/imgs/css-logo.png';
import img3 from '../assets/imgs/js-logo.png';
import img4 from '../assets/imgs/react-logo.png';
import img5 from '../assets/imgs/node-logo.png';
import img6 from '../assets/imgs/express-logo.png';


const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
            <h1 className="about-title">About</h1>
            </div>
            <div className="about-body">
                <div className="about-paragraph">
                    <p className="about-content">This MERN app is built with React and Node. It's a CRUD application where users can view and navigate through blog posts, add, delete, and edit posts. The client uses Axios to fetch the posts API data.</p>
                    <div className="about-images__container">
                        <h2 className="tech-header">Front End Technologies</h2>
                    <div className="about-images__wrapper">
                        <img src={img1} className="tech-img"/>
                        <img src={img2} className="tech-img css" />
                        <img src={img3} className="tech-img" />
                        <img src={img4} className="tech-img" />

                    </div>
                    <h2 className="tech-header">Back End Technologies</h2>
                    <div className="about-images__wrapper">
                    <img src={img5} className="tech-img node" />
                        <img src={img6} className="tech-img express"/>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
