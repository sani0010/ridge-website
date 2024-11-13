import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, User, Clock, Heart, MessageSquare, ArrowLeft } from 'lucide-react';

const BlogDetails = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h2>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Post Title */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author.name} • {post.author.role}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            <img 
              src={`/api/placeholder/1200/600`}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />

            {/* Content */}
            <div className="p-8">
              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Summary */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.summary}
              </p>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {post.details || `This is a detailed blog post about ${post.title}. The content provides in-depth information about the topic, including personal experiences, insights, and valuable takeaways for readers.`}
                </p>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-100">
                <div className="flex items-center text-gray-500">
                  <Heart className="h-5 w-5 mr-2" />
                  <span>{post.likes} likes</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Author</h2>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{post.author.name}</h3>
                <p className="text-gray-600 mb-4">{post.author.role}</p>
                <p className="text-gray-700">
                  An experienced contributor sharing insights about student life and academic experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;