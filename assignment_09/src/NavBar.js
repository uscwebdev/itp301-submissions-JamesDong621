import React from 'react';
import './NavBar.css'; // Make sure to create a NavBar.css file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Music Explorer</div>
      <div className="navbar-links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#genres" className="nav-link">
          Genres
        </a>
        <a href="#artists" className="nav-link">
          Artists
        </a>
      </div>
      <div className="navbar-login">
        <button className="login-button">Log In</button>
      </div>
    </nav>
  );
};

export default NavBar;
