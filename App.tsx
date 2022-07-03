import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="blogs" element={<Blogs />}>
          <Route path=":blogId" element={<Blog />} />
        </Route>
        <Route path="*" element={<div>Page Not Found ):</div>} />
      </Routes>
      <Footer />
    </div>
  );
}
