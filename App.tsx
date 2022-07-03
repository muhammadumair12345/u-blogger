import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>

    <Route path="/" element={<Home />}/>
      <Route path="create-blog" element={<CreateBlog />}>
      <Route path="blogs" element={<Blogs />}>
        <Route path=":blogId" element={<Blog />} />
      </Route>
    <Routes>

  );
}
