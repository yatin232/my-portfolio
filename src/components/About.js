import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            I'm a passionate developer with a love for creating clean, efficient, and user-friendly web applications.
            With expertise in React, JavaScript, and modern web technologies, I transform ideas into reality.
          </p>
          <p>
            When I'm not coding, you'll find me learning new technologies, contributing to open-source projects,
            or exploring the latest trends in web development.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <span>Your Photo Here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;