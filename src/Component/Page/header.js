import React from 'react';
import './Header.css';  // Separate CSS for header styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Cricket Skill Assessment</h1>
        <p className="header-description">
          Welcome to the Cricket Skill Assessment! Here you can evaluate players' skills in batting, bowling, fielding, and physical endurance. Complete each section and submit your scores to get a comprehensive assessment.
        </p>
      </div>
    </header>
  );
};

export default Header;
