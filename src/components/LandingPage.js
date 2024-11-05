import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import generalEnglish from '../assets/general-english.jpg';
import it from '../assets/it.jpg';
import leadership from '../assets/leadership.jpg';
import hospitality from '../assets/hospitality.jpg';
import agedCare from '../assets/aged-care.jpg';
import disabilityCare from '../assets/disability-care.jpg';
import communityService from '../assets/community-service.jpg';
import earlyChildhood from '../assets/early-childhood.jpg';
import heroBg1 from '../assets/hero-bg1.jpg';
import { motion} from 'framer-motion';

// Course data structure
const courses = [
  {
    title: 'General English',
    description: 'Learn essential English language skills for everyday communication.',
    image: generalEnglish,
    bgColor: 'bg-red-600',
    slug: 'general-english'
  },
  {
    title: 'Information Technology',
    description: 'Develop in-demand tech skills for the growing IT sector.',
    image: it,
    bgColor: 'bg-orange-500'
  },
  {
    title: 'Leadership and Management',
    description: 'Acquire essential skills for effective leadership in various industries.',
    image: leadership,
    bgColor: 'bg-green-600'
  },
  {
    title: 'Commercial Cookery & Hospitality Management',
    description: 'Kickstart your career in the hospitality industry.',
    image: hospitality,
    bgColor: 'bg-blue-600'
  },
  {
    title: 'Aged Care',
    description: 'Learn to provide quality care and support for elderly individuals.',
    image: agedCare,
    bgColor: 'bg-amber-700'
  },
  {
    title: 'Disability Care',
    description: 'Develop skills to support people with disabilities.',
    image: disabilityCare,
    bgColor: 'bg-cyan-500'
  },
  {
    title: 'Community Service',
    description: 'Gain knowledge and skills for a career in community support services.',
    image: communityService,
    bgColor: 'bg-pink-500'
  },
  {
    title: 'Early Childhood Education',
    description: "Learn to support children's development and well-being.",
    image: earlyChildhood,
    bgColor: 'bg-teal-600'
  }
];

const CourseCard = ({ course }) => (
  <Link to={`/course/${course.slug}`} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className={`${course.bgColor} absolute bottom-0 left-0 right-0 h-1`}></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
      <p className="text-gray-600">{course.description}</p>
    </div>
  </Link>
);

const LandingPage = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const modalRef = useRef();

  const handleApplyNowClick = () => {
    setShowFormModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowFormModal(false);
    setShowCompletionModal(true);
  };

  const closeModal = () => {
    setShowFormModal(false);
    setShowCompletionModal(false);
  };

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowFormModal(false);
      }
    };
    if (showFormModal) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [showFormModal]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-24 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold text-[#F26722] mb-4">
                Life at<br />
                Ridge International<br />
                College
              </h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-gray-600 mb-6"
              >
                Ridge International College is one of the best VET college in Australia. It is established in the aim of providing high quality training to students. We are endeavoured to sourcing top trainers and designing high quality training and assessment materials for students.
                We also have an exceptional teaching team, trainers with excellent academic skills holding PhD or Masters degrees, along with a great deal of teaching experience and practical knowledge from working in the industry, they are amongst the best in the respective field. 
                At our institute, only the most up-to-date knowledge and skills will be brought into our training and we ensure that we deliver quality outcomes for students, industry and the Australian economy.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#3554a5] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={heroBg1}
                alt="Campus"
                className="rounded-lg shadow-lg h-96 w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#F26722] mb-4">Explore the Areas of Study</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ridge International College offers nationally recognised courses for both domestic and international students in Melbourne and Sydney.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#3554a5] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8">
            Join Ridge International College and take the first step towards your future career.
          </p>
          <button 
            className="bg-white text-[#3554a5] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            onClick={handleApplyNowClick}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Application Form</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" required />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" required />
              <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" required />
              <input type="text" placeholder="Country" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" required />
              <input type="text" placeholder="Course of Interest" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" required />
              <textarea placeholder="Message (optional)" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none" rows="3"></textarea>
              <div className="flex justify-between">
                <button type="button" onClick={closeModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors">
                  Back
                </button>
                <button type="submit" className="bg-[#3554a5] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Completion Modal */}
      {showCompletionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Application Submitted!</h2>
            <p className="text-gray-600 mb-6">Thank you for applying. We will get back to you soon.</p>
            <button 
              onClick={closeModal} 
              className="bg-[#3554a5] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
