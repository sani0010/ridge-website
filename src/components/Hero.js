import React, { useEffect, useState } from 'react';

// Import your images
import heroBg1 from '../assets/hero-bg1.jpg';
import heroBg2 from '../assets/hero-bg2.jpg';
import eventImage from '../assets/Scholarship.png'; // Replace with your event image
import { Link } from 'react-router-dom';

const images = [heroBg1, heroBg2]; // Array of images

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true); // Initially set to true to show the modal on mount

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
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
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Ridge International College</h1>
          <p className="text-xl mb-6">Your path to success starts here</p>
          <Link to="/about">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Learn More
            </button>
          </Link>
        </div>

        {/* Left and Right Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
        >
          &gt;
        </button>
      </div>

      {/* Modal for Event Image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg p-1 md:w-1/2 lg:w-1/3 text-center relative shadow-lg">
            {/* Close button outside the image, at the top-right of the modal */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700 focus:outline-none"
            >
              <span className="text-xl font-bold">×</span>
            </button>

            {/* Image takes up the full width without any extra space below */}
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
