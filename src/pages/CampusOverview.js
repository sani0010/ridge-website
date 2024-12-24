import React, { useState, useEffect } from 'react';
import campusImg1 from '../assets/campus1.jpg';
import campusImg2 from '../assets/campus2.jpg';
import campusImg3 from '../assets/campus3.jpg';
import campusImg4 from '../assets/campus4.png';

const CampusOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    {
      src: campusImg1,
      title: 'One-On-One Mentorship',
      description: 'Our mentors are attentive and ready to address any concerns'
    },
    {
      src: campusImg2,
      title: 'Interactive Learning',
      description: 'Experience hands-on learning with our expert faculty'
    },
    {
      src: campusImg3,
      title: 'Modern Facilities',
      description: 'State-of-the-art facilities to enhance your learning'
    },
    {
      src: campusImg4,
      title: 'Campus Life',
      description: 'Experience vibrant campus culture and activities'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);  // Added images.length as a dependency

  // Get the current three small images (excluding the featured one)
  const getSmallImages = () => {
    const smallImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % images.length;
      smallImages.push(images[index]);
    }
    return smallImages;
  };

  // Get the featured image (the one that will be shown large)
  const getFeaturedImage = () => {
    const featuredIndex = (activeIndex + 3) % images.length;
    return images[featuredIndex];
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8 relative">
      {/* Orange Line */}
      <div className="absolute top-0 left-12 w-0.5 h-12 bg-orange-500 transform -rotate-12" />
      
      {/* Title Section */}
      <div className="ml-16 mb-8">
        <h1 className="text-4xl font-light text-orange-500">Campus</h1>
        <h1 className="text-4xl font-light text-orange-500">Overview</h1>
        <p className="text-gray-600 mt-4 text-lg font-light">
          Step into Apex, and experience the lively world.
        </p>
      </div>

      {/* Main Content Container */}
      <div className="mt-12 flex flex-col md:flex-row gap-8">
        {/* Small Images Row */}
        <div className="flex gap-4 w-full md:w-1/2">
          {getSmallImages().map((image, index) => (
            <div
              key={`small-${activeIndex}-${index}`}
              className="relative w-1/3 overflow-hidden transition-all duration-700"
            >
              <img
                src={image.src}
                alt={`Campus view ${index + 1}`}
                className="w-full aspect-video object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="relative w-full md:w-1/2 h-[300px] overflow-hidden rounded-lg">
          <div className="absolute inset-0 transition-all duration-1000">
            <img
              src={getFeaturedImage().src}
              alt="Featured view"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-2xl font-semibold mb-2">
                {getFeaturedImage().title.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-sm opacity-90">
                {getFeaturedImage().description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${index === activeIndex ? 'bg-orange-500 w-4' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CampusOverview;