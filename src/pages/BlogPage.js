import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'How to Boost Your Productivity as a Student',
    date: 'October 1, 2024',
    author: 'John Doe',
    summary:
      'In this post, we will explore several tips and techniques to help you boost your productivity while managing your studies effectively...',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Top 5 Online Learning Tools for Students',
    date: 'September 18, 2024',
    author: 'Jane Smith',
    summary:
      'Online learning has revolutionized the way we study. Here are the top 5 tools that every student should be using to enhance their online learning experience...',
    image: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Understanding Mental Health in Education',
    date: 'August 30, 2024',
    author: 'Alice Johnson',
    summary:
      'Mental health is a crucial aspect of student life. In this post, we’ll discuss ways to take care of your mental health while pursuing your education...',
    image: 'https://via.placeholder.com/800x400',
  },
];

const BlogPage = () => {
  // Fade-in animation for the content
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gray-100">
      {/* Main Banner */}
      <motion.section
        className="relative bg-[#004aad] text-white py-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Our Latest Blog Posts</h1>
          <p className="text-xl">Stay up to date with the latest news, insights, and student tips!</p>
        </div>
      </motion.section>

      {/* Blog Categories - 4 Buttons */}
      <motion.section
        className="container mx-auto px-6 py-6 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="flex justify-center space-x-6">
          <button className="bg-[#004aad] text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-[#003b8f] focus:outline-none">
            Education Tips
          </button>
          <button className="bg-[#004aad] text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-[#003b8f] focus:outline-none">
            Mental Health
          </button>
          <button className="bg-[#004aad] text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-[#003b8f] focus:outline-none">
            Online Learning
          </button>
          <button className="bg-[#004aad] text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-[#003b8f] focus:outline-none">
            Student Life
          </button>
        </div>
      </motion.section>

      {/* Blog Content */}
      <motion.section
        className="container mx-auto px-6 py-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.date} | by {post.author}</p>
                <p className="text-lg text-gray-700 mb-6">{post.summary}</p>
                <a
                  href="#"
                  className="text-[#004aad] font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default BlogPage;
