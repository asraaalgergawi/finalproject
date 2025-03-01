import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Add styles for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/map">Google Map</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
