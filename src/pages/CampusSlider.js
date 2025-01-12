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
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 1000); // Center image transition duration
  }, [isAnimating, images.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 1000); // Center image transition duration
  }, [isAnimating, images.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const [left, center, right] = getDisplayImages();

  const slideVariants = {
    enter: { x: direction === 1 ? '33%' : '-33%', opacity: 0, scale: 0.85, zIndex: 10 },
    center: { x: 0, opacity: 1, scale: 1, zIndex: 20 },
    exit: { x: direction === 1 ? '-33%' : '33%', opacity: 0, scale: 0.85, zIndex: 10 }
  };

  const staggeredSideImageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: (side) => ({
      opacity: side === 'right' ? 0.6 : 0.75,
      scale: side === 'right' ? 0.85 : 0.9,
      x: side === 'left' ? '-5%' : '5%',
      transition: {
        delay: side === 'right' ? 1 : 0, // Stagger the right image's transition
        duration: 1
      }
    }),
    hover: { opacity: 0.8, scale: 0.9 }
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden ">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Image */}
        <motion.div
          className="absolute left-4 md:left-12 w-1/3 h-[450px] z-10"
          variants={staggeredSideImageVariants}
          custom="left"
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src={images[left]}
            alt={`Campus ${left + 1}`}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Center Image */}
        <div className="relative w-2/5 h-[500px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <img
                src={images[center]}
                alt={`Campus ${center + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Image */}
        <motion.div
          className="absolute right-4 md:right-12 w-1/3 h-[450px] z-10"
          variants={staggeredSideImageVariants}
          custom="right"
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img
            src={images[right]}
            alt={`Campus ${right + 1}`}
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      <motion.button
        onClick={handlePrev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/20"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>
      <motion.button
        onClick={handleNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all border border-white/20"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
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
              index === currentIndex ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'
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
