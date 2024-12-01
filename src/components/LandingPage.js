import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Import images
import generalEnglish from '../assets/general-english.jpg';
import it from '../assets/it.jpg';
import leadership from '../assets/leadership.jpg';
import hospitality from '../assets/hospitality.jpg';
import agedCare from '../assets/aged-care.jpg';
import disabilityCare from '../assets/disability-care.jpg';
import communityService from '../assets/community-service.jpg';
import earlyChildhood from '../assets/early-childhood.jpg';
import heroBg1 from '../assets/hero-bg1.jpg';

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
    bgColor: 'bg-orange-500',
    slug: 'information-technology'
  },
  {
    title: 'Leadership and Management',
    description: 'Acquire essential skills for effective leadership in various industries.',
    image: leadership,
    bgColor: 'bg-green-600',
    slug: 'leadership-and-management'
  },
  {
    title: 'Commercial Cookery & Hospitality Management',
    description: 'Kickstart your career in the hospitality industry.',
    image: hospitality,
    bgColor: 'bg-blue-600',
    slug: 'commercial-cookery-hospitality-management'
  },
  {
    title: 'Aged Care',
    description: 'Learn to provide quality care and support for elderly individuals.',
    image: agedCare,
    bgColor: 'bg-amber-700',
    slug: 'aged-care'
  },
  {
    title: 'Disability Care',
    description: 'Develop skills to support people with disabilities.',
    image: disabilityCare,
    bgColor: 'bg-cyan-500',
    slug: 'disability-care'
  },
  {
    title: 'Community Service',
    description: 'Gain knowledge and skills for a career in community support services.',
    image: communityService,
    bgColor: 'bg-pink-500',
    slug: 'community-service'
  },
  {
    title: 'Early Childhood Education',
    description: "Learn to support children's development and well-being.",
    image: earlyChildhood,
    bgColor: 'bg-teal-600',
    slug: 'early-childhood-education'
  }
];

const CourseCard = ({ course }) => (
  <Link to={`/course/${course.slug}`} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className={`${course.bgColor} absolute bottom-0 left-0 right-0 h-1`}></div>
    </div>
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{course.description}</p>
    </div>
  </Link>
);

const LandingPage = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: '',
    phoneNumber: ''
  });
  const modalRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    // Initialize EmailJS with your service ID, template ID, and public key
    try {
      emailjs.init("BxXKTf8kRFRKqP00b");
    } catch (error) {
      console.error("EmailJS initialization error:", error);
      setErrorMessage("Email service initialization failed. Please try again later.");
    }
  }, []);

  const handleApplyNowClick = () => {
    setShowFormModal(true);
    setErrorMessage(''); // Clear any previous error messages
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages

    // Validate form data
    if (!formData.fullName || !formData.email || !formData.course || !formData.phoneNumber) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // Send email using EmailJS with more comprehensive error handling
    emailjs.send(
      "service_0bu2fzc",
      "template_8ki1tyw",
      {
        from_name: formData.fullName,
        from_email: formData.email,
        course: formData.course,
        phone_number: formData.phoneNumber,
        
        message: `Hello Ridge International College,
    
    A new application has been received for the ${formData.course} course.
    
    Applicant Details:
    Name: ${formData.fullName}
    Email: ${formData.email}
    Phone Number: ${formData.phoneNumber}
    
    Please review the application and follow up with the candidate.
    
    Best regards,
    Ridge International College Application System`
      }
    
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowFormModal(false);
        setShowCompletionModal(true);
      },
      (error) => {
        console.error('Email Send FAILED...', error);
        
        // More detailed error handling
        let errorMsg = 'Failed to submit application. ';
        if (error.text) {
          errorMsg += error.text;
        } else if (error.status) {
          errorMsg += `Status: ${error.status}. `;
        }
        
        setErrorMessage(errorMsg + ' Please check your internet connection or try again later.');
      }
    ).catch((err) => {
      console.error('Unexpected error:', err);
      setErrorMessage('An unexpected error occurred. Please try again.');
    });
  };

  const closeModal = () => {
    setShowFormModal(false);
    setShowCompletionModal(false);
    setErrorMessage('');
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
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gray-50 py-12 md:py-24 mb-8  md:mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6  lg:px-8">
          <div className="grid gap-8 items-center  md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl  md:text-4xl font-bold text-[#F26722] mb-4">
                Life at<br />
                Ridge International<br />
                College
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-gray-600 mb-6 text-sm sm:text-base"
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
                    className="bg-[#3554a5] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
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
                className="rounded-lg shadow-lg w-full object-cover h-64 md:h-96"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-5xl font-bold text-[#F26722] mb-7">Explore the Areas of Study</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Ridge International College offers nationally recognised courses for both domestic and international students.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#3554a5] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-sm sm:text-base">
            Join Ridge International College and take the first step towards your future career.
          </p>
          <button 
            className="bg-white text-[#3554a5] px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            onClick={handleApplyNowClick}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Form and Completion Modals */}
      {showFormModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div ref={modalRef} className="bg-white rounded-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Application Form</h2>
            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
              <input 
                type="text" 
                name="fullName"
                placeholder="Full Name" 
                value={formData.fullName}
                onChange={handleInputChange}
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
              />
<select 
  name="course"
  value={formData.course}
  onChange={handleInputChange}
  required 
  className='w-full px-4 py-2 border border-gray-300 rounded-lg'
>
  <option value="">Select a Course</option>
  <option value="General English">General English</option>
  <option value="Information Technology">Information Technology</option>
  <option value="Leadership and Management">Leadership and Management</option>
  <option value="Commercial Cookery & Hospitality Management">Commercial Cookery & Hospitality Management</option>
  <option value="Aged Care">Aged Care</option>
  <option value="Disability Care">Disability Care</option>
  <option value="Community Service">Community Service</option>
  <option value="Early Childhood Education">Early Childhood Education</option>
</select>
              <input 
                type="tel" 
                name="phoneNumber"
                placeholder="Phone Number" 
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
              />
              
              {/* Error message display */}
              {errorMessage && (
                <div className="text-red-500 text-sm text-center mb-4">
                  {errorMessage}
                </div>
              )}

              <button type="submit" className="w-full bg-[#3554a5] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Submit
              </button>
            </form>
            <button onClick={closeModal} className="mt-4 text-sm text-gray-500 hover:text-gray-700 text-center block w-full">
              Cancel
            </button>
          </div>
        </div>
      )}

      {showCompletionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="bg-white rounded-lg p-6 md:p-8 w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">Application Submitted</h2>
            <p className="text-gray-700 text-center mb-6">Thank you for your application! We will get in touch with you soon.</p>
            <button onClick={closeModal} className="w-full bg-[#3554a5] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
