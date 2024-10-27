import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import generalEnglish from '../assets/general-english.jpg';

// Example course data
const courseData = {
  'general-english': {
    title: 'ELICOS (General English)',
    subtitle: 'Elementary to Advanced',
    description: `Ridge International College offers a range of General English classes in Melbourne. 
    It is recommended as the first step of learning without English. Ridge International College 
    General English course focuses on teaching language skills required for everyday life and 
    academic purposes (entry pathway for RIC courses).`,
    tuitionFee: '$280 per week',
    cricosCode: '108438F',
    duration: 'up to 60 weeks',
    deliveryMethod: 'Face to Face at Level 5, 85 Queen Street, Melbourne, VIC 3000',
    prerequisites: 'There are no pre-requisites for this qualification or any of the units of competency contained within it.',
    admissionRequirements: 'All students must be 18 years of age or over at the time of applying for admission at RIC.',
    applicationFee: '$200 (non-refundable)',
    resourceFee: '$300 (non-refundable)',
    proficiencyLevels: [
      { level: 'Elementary', duration: '10 Weeks' },
      { level: 'Pre-Intermediate', duration: '10 Weeks' },
      { level: 'Intermediate', duration: '10 Weeks' },
      { level: 'Upper-Intermediate', duration: '10 Weeks' },
      { level: 'Advanced', duration: '10 Weeks' },
    ],
    assessmentMethods: [
      'Written/Oral questions',
      'Written Assignment',
      'Reading',
      'Speaking and class activities',
      'Listening activities',
    ],
    image: generalEnglish, // Replace with actual image path
  },
  // Add more courses here as needed
};

const CourseDetailPage = () => {
  const { courseName } = useParams(); // Get the course name from URL
  const course = courseData[courseName]; // Fetch course data

  // State declarations must be at the top level of the component
  const [showProficiency, setShowProficiency] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);

  if (!course) {
    return <div>Course not found!</div>; // Handle non-existent courses
  }

  const toggleProficiency = () => setShowProficiency((prev) => !prev);
  const toggleAssessment = () => setShowAssessment((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#F26722] mb-4">{course.title}</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">{course.subtitle}</h2>
        
        {/* Adjusted image styling */}
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-90 object-cover rounded-lg mb-6" // Increased height to 80
        />

        <p className="text-gray-600 mb-6">{course.description}</p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold text-gray-800 mt-10 mb-2">Course Key Information</h3>
          <table className="min-w-full border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Tuition Fee</td>
                <td className="border border-gray-300 px-4 py-2">{course.tuitionFee}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">CRICOS Code</td>
                <td className="border border-gray-300 px-4 py-2">{course.cricosCode}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Duration</td>
                <td className="border border-gray-300 px-4 py-2">{course.duration}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Delivery Method</td>
                <td className="border border-gray-300 px-4 py-2">{course.deliveryMethod}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Pre-requisites</td>
                <td className="border border-gray-300 px-4 py-2">{course.prerequisites}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Admission Requirements</td>
                <td className="border border-gray-300 px-4 py-2">{course.admissionRequirements}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Application Fee</td>
                <td className="border border-gray-300 px-4 py-2">{course.applicationFee}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Resource Fee</td>
                <td className="border border-gray-300 px-4 py-2">{course.resourceFee}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold text-gray-800 mt-10 mb-2">Course Proficiency Level and Duration</h3>
          <button onClick={toggleProficiency} className="bg-[#3554a5] text-white px-4 py-2 rounded-md mb-4">
            {showProficiency ? 'Hide Proficiency Levels' : 'Show Proficiency Levels'}
          </button>
          {showProficiency && (
            <ul className="list-disc list-inside text-gray-600">
              {course.proficiencyLevels.map((item, index) => (
                <li key={index}>
                  {item.level}: {item.duration}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-bold text-gray-800 mt-10 mb-2">Assessment Methods</h3>
          <button onClick={toggleAssessment} className="bg-[#3554a5] text-white px-4 py-2 rounded-md mb-4">
            {showAssessment ? 'Hide Assessment Methods' : 'Show Assessment Methods'}
          </button>
          {showAssessment && (
            <ul className="list-disc list-inside text-gray-600">
              {course.assessmentMethods.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#F26722] mb-4">Ready to Apply?</h2>
          <button className="bg-[#3554a5] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
