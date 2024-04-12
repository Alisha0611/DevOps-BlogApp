const initialState = {
    // blogPosts: [{
    //   "id": 1694510324849,
    //   "title": "Travel Blog",
    //   "category": "Travel",
    //   "content": "Hi! welcome to my travel blog",
    //   "liked": false
    // },
    // {
    //   "id": 1694510324848,
    //   "title": "Stay fit",
    //   "category": "Health and fitness",
    //   "content": "Health Blog",
    //   "liked": false
    // }],
    blogPosts: JSON.parse(localStorage.getItem('blogPosts')) || [],
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BLOG_POST':
        return {
          ...state,
          blogPosts: [...state.blogPosts, action.payload],
        };
  
      case 'EDIT_BLOG_POST':
        const updatedPosts = state.blogPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
        return {
          ...state,
          blogPosts: updatedPosts,
        };
  
      case 'DELETE_BLOG_POST':
        const filteredPosts = state.blogPosts.filter(
          (post) => post.id !== action.payload
        );
        return {
          ...state,
          blogPosts: filteredPosts,
        };
  
      case 'LIKE_BLOG_POST':
        const likedPosts = state.blogPosts.map((post) =>
          post.id === action.payload
            ? { ...post, liked: !post.liked }
            : post
        );
        return {
          ...state,
          blogPosts: likedPosts,
        };
  
      default:
        return state;
    }
  };
  
  export default blogReducer;
  