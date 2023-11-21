import React from 'react';
import './navbar.css';

const Navbar = () => {
    const logo_url = process.env.PUBLIC_URL + './ttt.jpg';
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo_url} alt="Logo" className="logo" />
        <div className="vertical-rule"></div>
        <span className="stories">STORIES</span>
      </div>
      <div className="nav-right">
        <button className="courses-button">Courses</button>
      </div>
    </div>
  );
};

export default Navbar;
