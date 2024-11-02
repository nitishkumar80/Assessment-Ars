import React from 'react';
import '../Css/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="background-blur3"></div>
      <header className="header">
        <h1>Welcome to Ars Kreedashala</h1>
        <p>Your one-stop destination for sports skill assessments.</p>
        <button className="cta-button">Get Started</button>
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

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <p>"Ars Kreedashala has transformed my game. The training and assessments are top-notch!" - John Doe</p>
        <p>"Highly recommend for anyone serious about improving their sports skills." - Jane Smith</p>
      </section>

      <section className="gallery">
        <h2>Our Sports Gallery</h2>
        <div className="image-gallery">
          <img src="https://wallpapers.com/images/hd/badminton-player-jumping-smash-6ujzevxqt0z9lwig.jpg" alt="Sports Activity 1" />
          <img src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-kid-boy-dribbling-bouncing-basketball-in-jersey-anak-kecil-laki-laki-png-image_7021394.png" alt="Sports Activity 2" />
          <img src="https://pngimg.com/d/cricket_PNG81.png" alt="Sports Activity 3" />
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>For inquiries, please reach out at: contact@arskreedashala.com</p>
      </section>
    </div>
  );
};

export default HomePage;
