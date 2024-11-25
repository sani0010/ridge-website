import React, { useEffect, useState } from 'react';
import eventImage from '../assets/Scholarship.png';
import heroVideo from '../assets/video.mp4';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasModalBeenShown = sessionStorage.getItem('modalShown');
    
    if (!hasModalBeenShown) {
      setIsModalOpen(true);
      sessionStorage.setItem('modalShown', 'true');
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src={heroVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for general visibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full z-10">
        <div className="flex flex-col justify-center items-center h-full text-white text-center p-4 md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Welcome to Ridge International College
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Your path to success starts here
          </p>
          <Link to="/about">
            <button className="bg-[#F26722] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#e0561b] transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
          <button 
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
            onClick={() => {
              const video = document.querySelector('video');
              if (video.paused) {
                video.play();
              } else {
                video.pause();
              }
            }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={document.querySelector('video')?.paused 
                  ? "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                  : "M10 9v6m4-6v6"
                }
              />
            </svg>
          </button>
          <button 
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
            onClick={() => {
              const video = document.querySelector('video');
              video.muted = !video.muted;
            }}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18v-2m0 0l-4-4m4 4l4-4m-4 4V6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal for Event Image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="bg-white rounded-lg p-1 w-full max-w-lg md:w-1/2 lg:w-1/3 text-center relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-white ring-2 ring-gray-300 hover:bg-gray-100 focus:outline-none z-10"
            >
              <span className="text-gray-800 text-xl font-bold">×</span>
            </button>
            <img
              src={eventImage}
              alt="Event"
              className="rounded-lg w-full h-auto object-cover mb-0"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;