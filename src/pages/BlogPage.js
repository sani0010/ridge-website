import React, { useState } from 'react';
import { Calendar, User, Search, Clock, ArrowUpRight, Heart, MessageSquare } from 'lucide-react';
import campus1 from '../assets/campus1.jpg';
import campus2 from '../assets/campus2.jpg';
import campus3 from '../assets/campus3.jpg';

const blogPosts = [
  {
    title: 'A Day in the Life of an International Student',
    date: 'October 1, 2024',
    author: {
      name: 'John Doe',
      role: 'International Student'
    },
    category: 'Student Life',
    tags: ['International', 'Campus Life'],
    summary: 'Follow along as I navigate through a typical day at Ridge International College, from morning classes to evening study sessions. Get insights into campus life, cultural experiences, and academic challenges...',
    readTime: '5 min read',
    likes: 124,
    comments: 23,
    image: campus1,

  },
  {
    title: 'How I Balanced Work and Study: Tips for Success',
    date: 'September 28, 2024',
    author: {
      name: 'Jane Smith',
      role: 'Final Year Student'
    },
    category: 'Study Tips',
    tags: ['Work-Study', 'Time Management'],
    summary: 'Struggling to manage your part-time job with your studies? In this blog post, I share my personal experience and practical tips that helped me maintain good grades while working...',
    readTime: '7 min read',
    likes: 89,
    comments: 15,

    image: campus2,

  },
  {
    title: 'My Exchange Semester Experience in Melbourne',
    date: 'September 25, 2024',
    author: {
      name: 'Alice Johnson',
      role: 'Exchange Student'
    },
    category: 'Experience',
    tags: ['Exchange Program', 'Melbourne'],
    summary: 'From discovering hidden cafes to adapting to a new educational system, heres my complete journey of studying abroad in Melbourne. Learn about the challenges, victories, and everything in between...',
    readTime: '6 min read',
    likes: 156,
    comments: 31,
    image: campus3,
  }
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Student Life', 'Study Tips', 'Experience', 'Career Advice', 'Campus Events'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#3554a5] to-[#3554a5] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Student Stories</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Real experiences, insights, and stories from our diverse student community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search blog posts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category 
                    ? 'bg-[#3554a5] text-white' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Blog Post */}
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 h-80">
                <img 
                  src={filteredPosts[0]?.image} 
                  alt={filteredPosts[0]?.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-[#3554a5] rounded-full text-sm font-medium">
                    {filteredPosts[0]?.category}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {filteredPosts[0]?.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {filteredPosts[0]?.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {filteredPosts[0]?.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      <div>
                        <p className="font-medium text-gray-900">{filteredPosts[0]?.author.name}</p>
                        <p className="text-xs">{filteredPosts[0]?.author.role}</p>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center text-[#3554a5] hover:text-p[#3554a5] font-medium">
                    Read Full Story
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-[#3554a5]rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3554a5] transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;