import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          {/* Newsletter Signup */}
          <div className="newsletter-signup">
            <h2>Sign up for our free Good Health Newsletter</h2>
            <p>Get wellness tips to help you live happier and healthier</p>
            <form>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </form>
            <p>By clicking Subscribe, I agree to the Health Assistance Terms & Conditions & Privacy Policy and understand that I may opt out of Health Assistance subscriptions at any time.</p>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <h3>Follow Health Assistance on Social Media</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>
          </div>

          {/* App Download Links */}
          <div className="app-download">
            <h3>Download Health Assistance App</h3>
            <div className="app-icons">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faApple} className="app-icon" />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGooglePlay} className="app-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-policies">
            <h3>Policies</h3>
            <a href="/about">About</a>
            <a href="/advertisers">For Advertisers</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/editorial-policy">Editorial Policy</a>
            <a href="/advertising-policy">Advertising Policy</a>
            <a href="/correction-policy">Correction Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/truste">TRUSTe</a>
            <a href="/tag">TAG Registered Seal</a>
            <a href="/adchoices">Adchoices</a>
          </div>

          <div className="footer-copyright">
            <p>© 2005 - 2024 Health Assistance LLC, an Internet Brands company. All rights reserved. Health Assistance does not provide medical advice, diagnosis, or treatment. See additional information.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;