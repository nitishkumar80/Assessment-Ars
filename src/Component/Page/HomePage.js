import React from 'react';
import '../Css/HomePage.css'

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Ars Kreedashala</h1>
        <p>Your one-stop destination for sports skill assessments.</p>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Comprehensive Skill Assessments</li>
          <li>Personalized Training Programs</li>
          <li>Feedback and Improvement Plans</li>
        </ul>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>Ars Kreedashala is dedicated to nurturing sports talent through specialized assessments and training.</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>For inquiries, please reach out at: contact@arskreedashala.com</p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Ars Kreedashala. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
