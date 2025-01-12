import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CampusSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  const getDisplayImages = () => {
    const lastIndex = images.length - 1;
    if (currentIndex === 0) return [lastIndex, 0, 1];
    if (currentIndex === lastIndex) return [lastIndex - 1, lastIndex, 0];
    return [currentIndex - 1, currentIndex, currentIndex + 1];
  };

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, images.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating, images.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const [left, center, right] = getDisplayImages();

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      zIndex: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1.1,
      zIndex: 20,
      transition: {
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      zIndex: 0,
      transition: {
        duration: 0.7,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  const sideImageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 0.5, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    hover: {
      opacity: 0.75,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Image */}
        <motion.div
          className="absolute left-4 md:left-8 w-1/4 h-[400px] z-10"
          variants={sideImageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src={images[left]}
            alt={`Campus ${left + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Center Image Container */}
        <div className="relative w-1/2 h-[500px] z-30">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <img
                src={images[center]}
                alt={`Campus ${center + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Image */}
        <motion.div
          className="absolute right-4 md:right-8 w-1/4 h-[400px] z-10"
          variants={sideImageVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src={images[right]}
            alt={`Campus ${right + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-8 h-8 text-white" />
      </motion.button>
      <motion.button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-40 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-8 h-8 text-white" />
      </motion.button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50 w-2'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default CampusSlider;