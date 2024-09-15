// src/BlogContent.js
import React from 'react';
import { motion } from 'framer-motion';
import './Blogcontent.css'
import Image1 from '../assets/1.jpeg';
import Image2 from '../assets/Designer(73).jpeg';
import Image3 from '../assets/Designer(74).jpeg';
import Image4 from '../assets/Designer(75).jpeg';
import Image5 from '../assets/Designer(79).jpeg';
const blogPosts = [
  {
    id: 1,
    title: "Understanding the Basics of Nutrition",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque urna sed ex lacinia, et volutpat nunc aliquam.",
    imageUrl: Image1,
    link: "#"
  },
  {
    id: 2,
    title: "10 Tips for Better Sleep Hygiene",
    description: "Vestibulum viverra ex ac leo faucibus, a elementum odio sagittis. Aliquam erat volutpat.",
    imageUrl: Image2,
    link: "#"
  },
  {
    id: 3,
    title: "The Importance of Regular Exercise",
    description: "Curabitur ut quam nec libero malesuada volutpat. Proin facilisis purus vitae velit suscipit efficitur.",
    imageUrl: Image3,
    link: "#"
  },
  {
    id: 4,
    title: "How to Manage Stress Effectively",
    description: "Integer fermentum nisl ut dolor fringilla, sed facilisis libero viverra. Nam quis ex non elit pellentesque ornare.",
    imageUrl: Image4,
    link: "#"
  },
  {
    id: 5,
    title: "Understanding Mental Health Awareness",
    description: "Maecenas eget nisl ut eros venenatis lacinia non id lorem. Donec consequat lectus at turpis ultricies, vel gravida urna dapibus.",
    imageUrl: Image5,
    link: "#"
  }
];

const Blogcontent = () => {
  return (
    <section className="blog-content">
      <motion.div
        className="blog-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Latest Health Insights</h1>
        <p>Stay updated with the latest trends and tips in health and wellness.</p>
      </motion.div>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <motion.article
            key={post.id}
            className="blog-post"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 * post.id }}
          >
            <img src={post.imageUrl} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={post.link}>Read More</a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Blogcontent;