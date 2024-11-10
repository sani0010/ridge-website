import React, { useEffect, useState } from 'react';
import heroBg1 from '../assets/hero-bg1.jpg';
import heroBg2 from '../assets/hero-bg2.jpg';
import eventImage from '../assets/Scholarship.png';
import { Link } from 'react-router-dom';

const images = [heroBg1, heroBg2];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Start with false

  useEffect(() => {
    // Check if the modal has been shown in this session
    const hasModalBeenShown = sessionStorage.getItem('modalShown');
    
    if (!hasModalBeenShown) {
      setIsModalOpen(true);
      // Mark that the modal has been shown in this session
      sessionStorage.setItem('modalShown', 'true');
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="h-screen relative">
      <div
        className="h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white text-center p-4 md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to Ridge International College</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">Your path to success starts here</p>
          <Link to="/about">
            <button className="bg-[#F26722] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#e0561b] transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Left and Right Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700 transition md:left-4 lg:left-6"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700 transition md:right-4 lg:right-6"
        >
          &gt;
        </button>
      </div>

      {/* Modal for Event Image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="bg-white rounded-lg p-1 w-full max-w-lg md:w-1/2 lg:w-1/3 text-center relative shadow-lg">
            {/* Close button positioned higher */}
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
