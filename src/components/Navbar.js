import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/signin" className="navbar-link">
            Sign In
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/signup" className="navbar-link">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;