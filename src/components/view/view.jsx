import React, { useEffect } from 'react';
import Header from '../header/header';
import './view.css';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { likeBlogPost } from '../../redux/blogAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const View = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const post = useSelector((state) =>
        state.blog.blogPosts.find((p) => p.id === parseInt(id))
    );

    useEffect(() => {
        if (!post) {
            navigate('/blogList');
        }
    }, [post, navigate]);

    const handleLike = () => {
        if (post) {
            dispatch(likeBlogPost(post.id));
        }
    };

    return (
        <div>
            <Header />
            {post ? (
                <div className='container-list'>
                    <div className='top'>
                        <h1 className="heading-add">{post.title}</h1>
                        <Link to='/blogList'><button className="back-btn">Back</button></Link>
                    </div>
                    <h6 className='category'>{post.category}</h6>
                    <p>{post.content}</p>
                    <span
                        onClick={handleLike}
                        style={{ cursor: 'pointer' }}
                    >
                        <FontAwesomeIcon
                            icon={faThumbsUp}
                            className={post.liked ? 'liked' : ''}
                        />
                        {post.liked ? ' Liked' : '  Not Liked'}
                    </span>
                </div>
            ) : (
                <div>Post not found.</div>
            )}
        </div>
    );
};

export default View;
