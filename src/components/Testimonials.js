import React, { useState, useEffect, useCallback } from 'react';
import studentImage1 from '../assets/student.jpg';
import studentImage2 from '../assets/student2.png';
import studentImage3 from '../assets/student3.png';
import studentImage4 from '../assets/student4.jpg';
import studentImage5 from '../assets/student5.jpg';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Shrena Maharjan",
      role: "Student",
      image: studentImage1,
      quote: "Ridge is a second home to me. Our trainer and student support team members are very caring and supportive. We get opportunities to share our interests and learn best from current industry practices. I am very thankful for the college."
    },
    {
      name: "Simranjeet Kaur",
      role: "Student",
      image: studentImage2,
      quote: "Journey with ridge international college has been a memorable one. Trainers were very helpful and management very supportive."
    },
    {
      name: "Nischal Khadka",
      role: "Student",
      image: studentImage3,
      quote: "One of the best and very good to study very helpful teacher and my lovely principal sir who is very good and helpful for everything thank your love and support towards me."
    },
    {
      name: "Rojina Dahal",
      role: "Student",
      image: studentImage4,
      quote: "Thank you so much Ridge International academy, for being so much supportive and also administrative team are always polite and willing to help out with any obstacles."
    },
    {
      name: "Rohit Yadav",
      role: "Student",
      image: studentImage5,
      quote: "One of the best cookery college so far...did my Cert III, IV in commercial cookery and Diploma of hospitality management from Ridge. Trainers are very helpful and team are always polite and willing to help out with any obstacles."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 10000);
    return () => clearInterval(interval);
  }, [handleNextTestimonial]);

  const handlePrevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            STUDENT TESTIMONIALS
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-12 bg-red-500"></div>
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <div className="h-1 w-12 bg-red-500"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
          {/* Decorative Quote Icon */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            <div className="bg-red-500 p-3 rounded-full shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            {/* Profile Image */}
            <div className="relative mx-auto w-32 h-32 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-1 bg-white rounded-full"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-red-500 font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed italic max-w-2xl mx-auto">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <button className="mt-8 px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold transform transition-all duration-300 hover:shadow-lg hover:scale-105">
                Read More
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <button
              onClick={handlePrevTestimonial}
              className="transform -translate-x-4 transition-transform duration-300 hover:scale-110 bg-white rounded-full p-2 shadow-lg text-red-500 hover:text-red-600 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="transform translate-x-4 transition-transform duration-300 hover:scale-110 bg-white rounded-full p-2 shadow-lg text-red-500 hover:text-red-600 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 h-2 rounded-full ${
                index === currentIndex ? 'w-8 bg-red-500' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;