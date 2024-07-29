import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>My Dashboard</h1>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." />
        <div className="navbar-buttons">
          <a href="#home" className="active">Home</a>
          <a href="#login">Login</a>
          <a href="#logout">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;