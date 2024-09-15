import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling
import healthy from './assets/healthy.jpg'
import img1 from './assets/21.jpg'
import img2 from './assets/22.jpg'
import img3 from './assets/23.jpg'

const Aboutus = () => {
  return (
    <div className="about-us-container">
      {/* Heroo Section */}
      <section className="heroo-section">
        <div className='test'>
          <h1 className="hero-title">About Our Company</h1>
          <p className="hero-description">
            We are a team of passionate developers and creators who strive to make the world a better place through innovation and technology. Our aim is to provide cutting-edge solutions that empower businesses and individuals alike.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <h2 className="section-title">Our History</h2>
        <p className="section-text">
          Founded in 2010, we started as a small group of enthusiastic coders who wanted to challenge the status quo in the tech industry. Over the years, we have grown into a large, diverse team of experts in various domains of technology.
        </p>
        <p className="section-text">
          From humble beginnings, we have expanded our services across the globe, partnering with hundreds of companies in different sectors. Our mission has always remained the same: to build solutions that simplify and enhance everyday life.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-content">
          <div className="mission-image">
            <img src={healthy} alt="Mission" />
          </div>
          <div className="mission-text">
            <p>
              Our mission is to create products and services that bring value to our customers. We believe in a customer-first approach, where we prioritize understanding and solving real problems with innovative solutions.
            </p>
            <p>
              Our goal is to harness the power of technology to foster growth and enable businesses to achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <ul className="values-list">
          <li>Innovation: We are constantly exploring new ways to solve problems and improve lives.</li>
          <li>Integrity: We uphold high ethical standards and always put our customers first.</li>
          <li>Excellence: We strive for excellence in everything we do, from product development to customer service.</li>
          <li>Collaboration: We believe in the power of teamwork and collaboration to achieve great things.</li>
          <li>Customer Success: We are dedicated to ensuring the success of our customers by providing them with the best solutions.</li>
        </ul>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-text">
          We envision a world where technology enables businesses and individuals to reach new heights of productivity and success. Our aim is to be at the forefront of technological advancements, creating solutions that are not only efficient but also accessible to everyone.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={img1} alt="Team Member 1" className="team-photo" />
            <h3 className="team-name">Jane Doe</h3>
            <p className="team-role">CEO & Founder</p>
            <p className="team-description">Jane is the visionary behind the company, with over 20 years of experience in tech leadership and innovation.</p>
          </div>
          <div className="team-member">
            <img src={img2} alt="Team Member 2" className="team-photo" />
            <h3 className="team-name">John Smith</h3>
            <p className="team-role">Lead Developer</p>
            <p className="team-description">John heads the development team, focusing on creating scalable and efficient solutions for our clients.</p>
          </div>
          <div className="team-member">
            <img src={img3} alt="Team Member 3" className="team-photo" />
            <h3 className="team-name">Alice Johnson</h3>
            <p className="team-role">Product Manager</p>
            <p className="team-description">Alice ensures that our products meet the highest standards and are aligned with our customer’s needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
