import React from 'react';
import './Hero.css'; 
import backgroundImage from '../assets/integration-5192458.jpg'

const Hero = () => {
  return (
    <section className="hero-section" style={{backgroundImage: `url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
      <div className="hero-content">
        <h1 className="hero-heading">Your Health, Our Priority</h1>
        <p className="hero-subheading">
          Providing top-notch health care and personalized services to improve your well-being.
        </p>
        <a href="#services" className="hero-button">Explore Our Services</a>
      </div>
    </section>
  );
};

export default Hero;