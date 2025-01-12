import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CampusSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const getDisplayImages = () => {
    const lastIndex = images.length - 1;
    if (currentIndex === 0) return [lastIndex, 0, 1];
    if (currentIndex === lastIndex) return [lastIndex - 1, lastIndex, 0];
    return [currentIndex - 1, currentIndex, currentIndex + 1];
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, images.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, images.length]);

  React.useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const [left, center, right] = getDisplayImages();

  return (
    <div className="relative w-full h-[600px] overflow-hidden ">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Image */}
        <div className="absolute left-4 md:left-8 w-1/4 h-[400px] transition-all duration-500 opacity-50 transform -translate-x-4 hover:opacity-75">
          <img
            src={images[left]}
            alt={`Campus ${left + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Center Image */}
        <div className="w-1/2 h-[500px] transition-all duration-500 z-10 transform scale-110">
          <img
            src={images[center]}
            alt={`Campus ${center + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Right Image */}
        <div className="absolute right-4 md:right-8 w-1/4 h-[400px] transition-all duration-500 opacity-50 transform translate-x-4 hover:opacity-75">
          <img
            src={images[right]}
            alt={`Campus ${right + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CampusSlider;