
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup'; 
import Hero from './components/Hero'
import Assistance from './components/Assistance'
import Signin from './Signin'; 
import Blogcontent from './components/Blogcontent';
import BlogSection from './components/BlogSection';
import FooterSection from './components/FooterSection';
import Footer from './components/Footer';
import Aboutus from './Aboutus';




const App = () => {
  return (
    <Router>
      <Navbar/>
      <div style={{ paddingTop: '60px' }}> {/* Adjust padding to prevent overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/services" element={<ServicesContent />} />
          <Route path="/guideline" element={<GuidelineContent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

const HomeContent = () => (
  <div>
    
    <Hero/>
    <Assistance/>
    <Blogcontent/>
    <BlogSection/>
    <FooterSection/>
    <Footer/>
  </div>
);

const AboutContent = () => (
  <div>
    <Aboutus/>
    <Footer/>
  </div>
);

const ServicesContent = () => (
  <div>
    <h1>Our Services</h1>
    <p>Explore the services we offer.</p>
  </div>
);

const GuidelineContent = () => (
  <div>
    <h1>Guidelines</h1>
    <p>Read our guidelines for using our services.</p>
  </div>
);

export default App;