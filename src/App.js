import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import AddBlog from './components/addBlog/addBlog'
import BlogList from './components/blogList/blogList';
import View from './components/view/view';
import EditBlog from './components/editBlog/editBlog';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/blogList" element={<BlogList />} />
          <Route path="/blog/:id" element={<View />} />
          <Route path="/edit/:id" element={<EditBlog />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
