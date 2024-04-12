import React from 'react';
import './blogList.css';
import Header from '../header/header';
import { deleteBlogPost } from '../../redux/blogAction';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const BlogList = () => {
    const blogPosts = useSelector((state) => state.blog.blogPosts);
    const dispatch = useDispatch();

    const handleDelete = (postId) => {
        // Dispatch the delete action
        dispatch(deleteBlogPost(postId));
    };

    return (
        <div>
            <Header />
            <div className="container-list">
                <div className='top'>
                    <h1 className="heading-add">All Blog Posts</h1>
                    <div className="buttons">
                        <Link to='/addBlog'><button className="back-btn newpost">New Post</button></Link>
                        <Link to='/'><button className="back-btn">Back</button></Link>
                    </div>
                </div>
                <ul className='bloglist'>
                    {blogPosts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/blog/${post.id}`} className='link'>{post.title}</Link>
                            <div className="list-content">
                                <Link to={`/edit/${post.id}`} className="icon-container">
                                    <FontAwesomeIcon icon={faEdit} className='edit-icon' />
                                </Link>
                                <span onClick={() => handleDelete(post.id)} className="icon">
                                    <FontAwesomeIcon icon={faTrash} className='delete-icon' />
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogList;
