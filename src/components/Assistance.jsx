import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faDumbbell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Assistance.css';

const Assistance = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='h1-assistance'
        >
          Transform Your Health Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className='h1-assistance'
        >
          Discover personalized health insights and achieve your wellness goals with ease.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Link to="/signup" className="btn primary-btn">Get Started</Link>
          <button className="btn secondary-btn">Learn More</button>
        </motion.div>
      </div>
      <div className="hero-icons">
        <motion.div
          className="icon-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <FontAwesomeIcon icon={faHeartbeat} size="3x" />
          <p className='wolo'>Heart Health</p>
        </motion.div>
        <motion.div
          className="icon-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <FontAwesomeIcon icon={faDumbbell} size="3x" />
          <p className='wolo'>Fitness Tracking</p>
        </motion.div>
        <motion.div
          className="icon-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <FontAwesomeIcon icon={faUser} size="3x" />
          <p className='wolo'>Personalized Insights</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Assistance;