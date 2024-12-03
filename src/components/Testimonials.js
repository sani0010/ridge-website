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
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateTestimonial = useCallback((newIndex) => {
    setIsAnimating(true);

    // First fade out
    setTimeout(() => {
      // Update the display index after fade out
      setDisplayIndex(newIndex);

      // Then fade back in
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 250);

    // Update the current index for the indicators
    setCurrentIndex(newIndex);
  }, []);

  const handleNextTestimonial = useCallback(() => {
    if (isAnimating) return;
    const newIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(newIndex);
  }, [currentIndex, isAnimating, testimonials.length, updateTestimonial]);

  const handlePrevTestimonial = useCallback(() => {
    if (isAnimating) return;
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(newIndex);
  }, [currentIndex, isAnimating, testimonials.length, updateTestimonial]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 10000);
    return () => clearInterval(interval);
  }, [handleNextTestimonial]);

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            STUDENT TESTIMONIALS
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-12 bg-[#f26722]"></div>
            <div className="h-2 w-2 rounded-full bg-[#f26722]"></div>
            <div className="h-1 w-12 bg-[#f26722]"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative bg-gray-50 rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          {/* Decorative Quote Icon */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#f26722] p-3 rounded-full shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Fixed Height Container */}
          <div className="min-h-[450px] relative">
            <div 
              className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
              }`}
            >
              {/* Profile Image */}
              <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f26722] to-blue-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-1 bg-white rounded-full"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img
                    src={testimonials[displayIndex].image}
                    alt={testimonials[displayIndex].name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {testimonials[displayIndex].name}
                  </h3>
                  <p className="text-red-500 text-sm sm:text-base font-medium">
                    {testimonials[displayIndex].role}
                  </p>
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed italic max-w-2xl mx-auto px-4 sm:px-8 min-h-[120px] flex items-center justify-center">
                  "{testimonials[displayIndex].quote}"
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <button
              onClick={handlePrevTestimonial}
              disabled={isAnimating}
              className="transition-all duration-300 hover:scale-110 bg-white rounded-full p-3 shadow-lg text-red-500 hover:text-red-600 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextTestimonial}
              disabled={isAnimating}
              className="transition-all duration-300 hover:scale-110 bg-white rounded-full p-3 shadow-lg text-red-500 hover:text-red-600 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-1 sm:gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 h-1.5 sm:h-2 rounded-full ${
                index === currentIndex ? 'w-6 sm:w-8 bg-[#3554a5]' : 'w-1.5 sm:w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;