// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import './Navbar.css'; // Ensure this path is correct


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  const handleMenuToggle = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="navbar"
      animate={controls}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-logo">
        <Link to="/" className='font-raleway'>Health Assistant</Link>
      </div>
      <div className="navbar-menu-toggle" onClick={handleMenuToggle}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <motion.ul
        className= {` navbar-links : ${isMobile ? (menuOpen ? 'mobile open' : 'mobile') : ''}`}
        animate={controls}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/" className='btn' onClick={handleLinkClick}>Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/about" className='btn' onClick={handleLinkClick}>About</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/services" className='btn' onClick={handleLinkClick}>Services</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link to="/guideline" className='btn' onClick={handleLinkClick}>Guideline</Link>
        </motion.li>
      </motion.ul>
      <div className={`navbar-buttons ${isMobile ? 'mobile' : ''}`}>
        <Link to="/signup" className="button" id='btn-1'>Sign Up</Link>
        <Link to="/signin" id='btn' className="button">Sign In</Link>
      </div>
    
      {isMobile && (
        <motion.div
          className={`navbar-menu ${menuOpen ? 'open' : ''}`}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="menu-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLinkClick}
          >
            <Link to="/" className='holo'>Home</Link>
          </motion.div>
          <motion.div
            className="menu-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLinkClick}
          >
            <Link to="/about" className='holo'>About</Link>
          </motion.div>
          <motion.div
            className="menu-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLinkClick}
          >
            <Link to="/services" className='holo'>Services</Link>
          </motion.div>
          <motion.div
            className="menu-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLinkClick}
          >
            <Link to="/guideline" className='holo'>Guideline</Link>
          </motion.div>
          <motion.div
            className="menu-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLinkClick}
          >
            <Link to="/signup" className='holo'>Sign Up</Link>
          </motion.div>
          <motion.div
            className="menu-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLinkClick}
          >
            <Link to="/signin" className='holo'>Sign In</Link>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;