// BlogSection.js
import React from 'react';
import './BlogSection.css';
import Image2 from '../assets/2.jpg';
import Image3 from '../assets/3.jpg';
import Image4 from '../assets/4.jpg';

const posts = [
  {
    id: 1,
    title: "The Benefits of Regular Exercise",
    date: "August 14, 2024",
    excerpt: "Discover how regular exercise can improve your health and wellbeing.",
    image: Image3
  },
  {
    id: 2,
    title: "Healthy Eating Habits",
    date: "August 10, 2024",
    excerpt: "Learn about the best practices for maintaining a balanced diet.",
    image: Image2
  },
  {
    id: 3,
    title: "Managing Stress Effectively",
    date: "August 5, 2024",
    excerpt: "Explore strategies to manage and reduce stress in your daily life.",
    image: Image4
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="blog-container">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;