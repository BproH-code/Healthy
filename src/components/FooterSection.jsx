// src/components/FooterSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faMapMarkerAlt, faCalendarCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './FooterSection.css'; // Add your custom CSS here

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <motion.div 
          className="footer-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FontAwesomeIcon icon={faUserMd} className="footer-icon" />
          <h3>Doctors</h3>
          <p>Find and connect with our healthcare professionals.</p>
          <a href="/doctors">Learn More</a>
        </motion.div>

        <motion.div 
          className="footer-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
          <h3>Locations</h3>
          <p>Explore our facilities and find the nearest location.</p>
          <a href="/locations">Learn More</a>
        </motion.div>

        <motion.div 
          className="footer-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <FontAwesomeIcon icon={faCalendarCheck} className="footer-icon" />
          <h3>Appointments</h3>
          <p>Schedule or manage your appointments easily.</p>
          <a href="/appointments">Learn More</a>
        </motion.div>

        <motion.div 
          className="footer-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <FontAwesomeIcon icon={faUserCircle} className="footer-icon" />
          <h3>MyChart</h3>
          <p>Access your medical records and manage your health online.</p>
          <a href="/mychart">Learn More</a>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
