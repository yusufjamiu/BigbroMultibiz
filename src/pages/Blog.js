import React, { useState } from 'react';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

// Blog post images (replace with actual images)
import blogImage1 from '../assets/BigbroMultibiz.jpg';
import blogImage2 from '../assets/BigbroMultibiz.jpg';
import blogImage3 from '../assets/BigbroMultibiz.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Transforming Agriculture through Innovation',
    excerpt: 'Explore how cutting-edge technologies are revolutionizing modern farming practices and creating sustainable solutions.',
    author: 'Taiwo Hassan',
    date: 'November 15, 2024',
    readTime: '5 min read',
    image: blogImage1,
    categories: ['Agriculture', 'Technology'],
    href: 'https://facebook.com/' // External link
  },
  {
    id: 2,
    title: 'Strategic Insights in Real Estate Investment',
    excerpt: 'Uncover key strategies for successful real estate investment in today dynamic market landscape.',
    author: 'anonymous',
    date: 'October 22, 2024',
    readTime: '7 min read',
    image: blogImage2,
    categories: ['Real Estate', 'Investment'],
    href: 'https://facebook.com/' // External link
  },
  {
    id: 3,
    title: 'Entrepreneurship in the Hospitality Industry',
    excerpt: 'Discover innovative approaches to building and scaling a successful hospitality business in a competitive market.',
    author: 'Taiwo Hassan',
    date: 'September 5, 2024',
    readTime: '6 min read',
    image: blogImage3,
    categories: ['Entrepreneurship', 'Hospitality'],
    href: 'https://facebook.com/' // External link
  }
];

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Latest Insights
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover object-center transition-transform duration-300 transform hover:scale-110"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                {post.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>

              <div className="flex justify-between items-center text-gray-500 text-sm mb-4">
                <div className="flex items-center space-x-2">
                  <FaUser />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCalendar />
                  <span>{post.date}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">
                  {post.readTime}
                </span>
                <a 
                  href={post.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`
                    flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-all
                    ${hoveredPost === post.id ? 'transform translate-x-2' : ''}
                  `}
                >
                  <span>Read More</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Stay informed with our latest thoughts, research, and industry insights.
        </p>
      </div>
    </div>
  );
};

export default Blog;