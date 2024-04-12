import React, { useState, useEffect } from 'react';
import './addBlog.css';
import Header from '../header/header';
import { useDispatch } from 'react-redux';
import { addBlogPost } from '../../redux/blogAction';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddBlogPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    let timeoutId;
    if (error) {
      timeoutId = setTimeout(() => {
        setError('');
      }, 2000); 
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [error]);

  const handleAddPost = () => {
    if (title.trim() === '' || content.trim() === '' || category.trim()==='') {
      setError('Please fill out all details.');
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      category,
      content,
      liked: false,
    };

    dispatch(addBlogPost(newPost));

    // Clear the form
    setTitle('');
    setContent('');
    setError('');
    navigate('/blogList'); 
  };

  return (
    <div>
      <Header />
      <div className="container-add">
        <div className='top'>
          <h1 className="heading-add">Add New Blog Post</h1>
          <Link to='/'><button className="back-btn">Back</button></Link>
        </div>
        <form>
          <div class="form-group">
            <label for="title">Title:</label>
            <input type="text"
              class="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              name="title"
              placeholder="Enter the title"
              required />
          </div>
          <div className="form-group">
            <label for="category">Category:</label>
            <select className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              name="category" required>
              <option value="">Select a category</option>
              <option value="Technology">Tech</option>
              <option value="Travel">Travelling</option>
              <option value="Lifestyle">Fashion</option>
            </select>
          </div>
          <div className="form-group">
            <label for="content">Content:</label>
            <textarea value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-control"
              id="content"
              name="content"
              rows="4"
              placeholder="Write your blog post content"
              required></textarea>
          </div>
        </form>
          <div className="btn-area">
            <button onClick={handleAddPost} type="submit" className="btn">Add Post</button>
            {error && <p className="error-message">{error}</p>}
            {/* <button type="reset" className="btn">Clear</button> */}
          </div>
      </div>
    </div>
  );
};

export default AddBlogPost;
