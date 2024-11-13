import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, User, Clock, Heart, MessageSquare, ArrowLeft } from 'lucide-react';
import campus1 from '../assets/campus1.jpg';
import campus2 from '../assets/campus2.jpg';
import campus3 from '../assets/campus3.jpg';

const campusImages = [
  { id: 1, src: campus1, alt: "Campus Life Scene 1" },
  { id: 2, src: campus2, alt: "Campus Life Scene 2" },
  { id: 3, src: campus3, alt: "Campus Life Scene 3" }
];

const BlogDetails = () => {
  const location = useLocation();
  const { post } = location.state || {};

  // Function to get random image for post
  const getPostImage = () => {
    const randomIndex = Math.floor(Math.random() * campusImages.length);
    return campusImages[randomIndex];
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h2>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
            <Link
              to="/blog"
              className="inline-flex items-center text-[#3554a5] hover:text-[#3554a5] font-medium"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const postImage = getPostImage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Post Title */}
      <div className="bg-gradient-to-r from-[#3554a5] to-[#3554a5] text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/blogs"
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
            <div className="relative">
              <img 
                src={postImage.src}
                alt={postImage.alt}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                {postImage.alt}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Category Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-[#3554a5] rounded-full text-sm font-medium"
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
                
                {/* Additional Images Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={campus2}
                      alt="Campus Life Scene 2"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                      Campus Life Scene 2
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={campus3}
                      alt="Campus Life Scene 3"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                      Campus Life Scene 3
                    </div>
                  </div>
                </div>
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
                <User className="h-8 w-8 text-[#3554a5]" />
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