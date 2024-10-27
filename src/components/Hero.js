import React, { useEffect, useState } from 'react';

// Import your images
import heroBg1 from '../assets/hero-bg1.jpg';
import heroBg2 from '../assets/hero-bg2.jpg';

const images = [heroBg1, heroBg2]; // Array of images

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <section className="h-screen relative">
      <div
        className="h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Ridge International College</h1>
          <p className="text-xl mb-6">Your path to success starts here</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Learn More
          </button>
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
    </section>
  );
};

export default Hero;
