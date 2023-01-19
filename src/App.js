import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/Home/Home';
import BlogPage from './components/Home/Blogs/BlogPage';
import SavedBlogs from './components/SavedBlogs/SavedBlogs';


function App() {

  return (
    <>
      <Layout >
          <Routes>
            <Route path = "/" element={<Home />}/>                          
            <Route path = "/blog/:slug" element={<BlogPage />}/>
            <Route path = "/saved-blogs" element={<SavedBlogs />}/>
          </Routes>
      </Layout >
    </>
  );
}

export default App;
