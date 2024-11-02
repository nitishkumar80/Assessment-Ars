import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="toggle-button" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/assessment" onClick={handleLinkClick}>Cricket Skill Assessment</Link>
        </li>
        <li className="nav-item">
          <Link to="/foot-assessment" onClick={handleLinkClick}>Football Skill Assessment</Link>
        </li>
        <li className="nav-item">
          <Link to="/badminton-assessment" onClick={handleLinkClick}>Badminton Skill Assessment</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
