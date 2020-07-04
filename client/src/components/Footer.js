import React from 'react';
import '../assets/style/footer.css';

const footerData = [
    {
        title: 'Developed by Michele Zucca Web Dev',
        link: 'https://michelezuccawebdeveloper.netlify.app/'
    },

    {
        title: 'GitHub Repo',
        link: 'https://github.com/micahsuomi/react-blog-app'
    }
]


let formattedData = footerData.map((data, index) => <a href={data.link} key={index}><p>{data.title}</p></a>)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                {formattedData}
            </div>
        </footer>
    )
}

export default Footer;