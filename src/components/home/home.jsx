import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>BLOG POST APP</h1>
                <p>
                    Add & Search blogs.
                </p>
                <div className="btn-area">
                    <Link to='/blogList' className="btnn"><button className="btn">View blogs</button></Link>
                    <Link to='/addBlog'><button className="btn">Add blog</button></Link>
                </div>
            </div>
        </div>
    );
};

export default home;