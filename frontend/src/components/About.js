import React from "react";
import "./About.css"; // Add a CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <p>
          Welcome to <strong>NEGEV PULSE website</strong>, where innovation meets simplicity. 
          We are committed to providing cutting-edge solutions tailored to meet 
          the needs of our users.
        </p>
        <p>
          Our mission is to empower individuals and businesses with tools and 
          technology that enhance productivity, streamline processes, and 
          foster creativity. We believe in creating user-friendly, 
          accessible, and impactful web experiences.
        </p>
        <p>
          At <strong>Your Website Name</strong>, our team of skilled developers, designers, 
          and visionaries work tirelessly to deliver the best to our users. 
          Thank you for being a part of our journey!
        </p>
      </div>
      <div className="about-footer">
        <p>For inquiries, please contact us at: <a href="mailto:info@yourwebsite.com">finalproject@gmail.com</a></p>
      </div>
    </div>
  );
};

export default About;
