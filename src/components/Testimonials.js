// src/components/Testimonials.js
import React, { useState, useEffect } from 'react';
import studentImage1 from '../assets/student.jpg'; // First student image
import studentImage2 from '../assets/student2.jpg'; // Second student image
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John",
      role: "Student",
      image: studentImage1,
      quote: "Ridge is a second home to me. Our trainer and student support team members are very caring and supportive. We get opportunities to share our interests and learn best from current industry practices. I am very thankful for the college."
    },
    {
      name: "MS. SHRENA MAHARJAN",
      role: "Student",
      image: studentImage2,
      quote: "Ridge is a second home to me. Our trainer and student support team members are very caring and supportive. We get opportunities to share our interests and learn best from current industry practices. I am very thankful for the college."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">STUDENT TESTIMONIALS</h2>
      
      {/* Red Underline */}
      <div className="flex justify-center mb-12">
        <div className="w-24 h-1 bg-red-500"></div>
      </div>

      <div className="relative">
        {/* Content Container */}
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
            <img 
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Role */}
          <h3 className="text-xl font-semibold mb-1">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-gray-600 mb-6">
            {testimonials[currentIndex].role}
          </p>

          {/* Testimonial Text */}
          <p className="text-gray-700 max-w-2xl mb-6">
            {testimonials[currentIndex].quote}
          </p>

          {/* Read More Button */}
          <button className="text-orange-500 border border-orange-500 px-6 py-2 rounded hover:bg-orange-500 hover:text-white transition-colors">

            Read More
          </button>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={32} />
        </button>

        <button 
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600"
          aria-label="Next testimonial"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;