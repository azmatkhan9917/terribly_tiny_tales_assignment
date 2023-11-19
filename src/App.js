import React from 'react';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import './App.css';
import BlogComponent from './components/BlogComponent';
import blogData from './components/Data';


const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Profile />
      <BlogComponent blogData={blogData} />
    </div>
  );
};

export default App;