import React, { useState } from 'react';
import { Calendar, User, Search, Clock, ArrowUpRight, Heart, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import campus1 from '../assets/campus1.jpg';
import campus2 from '../assets/campus2.jpg';
import campus3 from '../assets/campus3.jpg';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  // Truncate summary function
  const truncateSummary = (summary, maxLength = 200) => {
    if (summary.length <= maxLength) return summary;
    return summary.substring(0, maxLength) + '...';
  };

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
      summary: 'As an international student, every day brings new experiences and challenges. My day typically starts at 7 AM, when I head to the campus café for a quick breakfast before my 8:30 AM Economics class. The diversity in the classroom is incredible - we have students from over 15 different countries One of the most interesting aspects of my day is the cultural exchange that happens naturally during lunch breaks. We often share traditional snacks from our home countries and discuss how university life differs across cultures. The afternoon is usually packed with study sessions in the library, where Ive found a great study group. We help each other not just with academics, but also in understanding cultural nuances and adapting to life in a new country. Evening activities often include participating in international student society events, where we organize cultural festivals, language exchange programs, and support sessions for new international students. These activities have helped me build a strong community away from home.',
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
      summary: 'Balancing work and studies is like walking on a tightrope - it requires focus, balance, and constant adjustment. Through my journey as a working student, Ive developed strategies that helped me excel in both areas. Time management is crucial. I use the Pomodoro Technique for studying, breaking my work into 25-minute focused sessions. This helps me maintain concentration and make the most of my limited study time. Communication with professors and employers is key. I have found that most are understanding and flexible if you are upfront about your commitments. Many professors have offered alternative assignment deadlines, and my employer allows me to adjust my schedule during exam periods. The biggest lesson I have learned is the importance of self-care. Despite busy schedules, taking time for rest and recreation is essential for long-term success.',
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
      summary: 'My semester in Melbourne was a transformative experience that changed my perspective on education and life. The Australian approach to learning, with its emphasis on independent research and practical application, was refreshingly different from what I was used to. Melbourns coffee culture became an integral part of my student life. I found that some of my best study sessions happened in the citys hidden laneway cafes. The blend of academic and cultural experiences made every day an adventure. One of the highlights was participating in field research projects that took us to the Great Ocean Road and the Grampians. These hands-on experiences taught me more about environmental science than any textbook could. The challenges of adapting to a new educational system and culture were real, but the support from local students and faculty made the transition smoother. I have made lifelong friends and professional connections that I know will be valuable in my future career.',
      readTime: '6 min read',
      likes: 156,
      comments: 31,
      image: campus3,
    }
  ];

  const categories = ['All', 'Student Life', 'Study Tips', 'Experience', 'Career Advice', 'Campus Events'];

  const handlePostClick = (post) => {
    navigate(`/blog/${encodeURIComponent(post.title)}`, { state: { post } });
  };

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
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => handlePostClick(filteredPosts[0])}
            >
              <div className="md:flex">
                <div className="md:w-1/2 h-80">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-[#3554a5] rounded-full text-sm font-medium">
                      {filteredPosts[0].category}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {filteredPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {truncateSummary(filteredPosts[0].summary)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-2" />
                        <div>
                          <p className="font-medium text-gray-900">{filteredPosts[0].author.name}</p>
                          <p className="text-xs">{filteredPosts[0].author.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-[#3554a5] hover:text-blue-700 font-medium">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-[#3554a5] rounded-full text-sm font-medium">
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
                  {truncateSummary(post.summary)}
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