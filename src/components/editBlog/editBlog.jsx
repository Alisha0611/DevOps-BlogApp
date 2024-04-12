import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { editBlogPost } from '../../redux/blogAction';

const EditBlogPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.blog.blogPosts.find((p) => p.id === parseInt(id))
  );
  const [error, setError] = useState('');
  const [title, setTitle] = useState(post.title);
  const [category, setCategory] = useState(post.category);
  const [content, setContent] = useState(post.content);

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

  

  if (!post) {
    return <div>Post not found.</div>;
  }


  const handleEditPost = () => {
    const updatedPost = {
      ...post,
      title,
      category,
      content
    };

    dispatch(editBlogPost(updatedPost));
    navigate(`/blog/${post.id}`);
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
              <option value="technology">Technology</option>
              <option value="travel">Travel</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="health">Health and fitness</option>
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
          <button onClick={handleEditPost} type="submit" className="btn">Update Post</button>
          {error && <p className="error-message">{error}</p>}
          {/* <button type="reset" className="btn">Clear</button> */}
        </div>
      </div>
    </div>
  );
};

export default EditBlogPost;
