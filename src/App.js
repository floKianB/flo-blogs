import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/Home/Home';
import BlogPage from './components/Home/Blogs/BlogPage';
import AuthorPage from './components/AuthorPage';



function App() {

  return (
    <>
      <Layout >
          <Routes>
            <Route path = "/Home" element={<Home />}/>                          
            <Route path = "/author/:slug " element={<AuthorPage />}/>
            <Route path = "/blog/:slug" element={<BlogPage />}/>
          </Routes>
      </Layout >
    </>
  );
}

export default App;
