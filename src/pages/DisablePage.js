import React from 'react';
import { Link } from 'react-router-dom';
import diploma from '../assets/diplomaITImage.jpg';


const AgedPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#F26722] mb-4">Information Technology Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our specialized Information Technology courses, designed to equip you with advanced skills.
        </p>
        {/* Link to the main IT Courses page */}
        <Link to="/courses" className="text-lg text-[#F26722] hover:text-[#F26722] mt-4 inline-block">
          Explore All Information Technology Courses
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* ICT50220 Diploma of Information Technology */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl duration-300">
          <img src={diploma} alt="ICT50220 Diploma of Information Technology" className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110" />
          <div className="p-6">
            <Link to="/course/chc43121-certificate-iv-disability-support" className="text-xl font-semibold text-gray-800 hover:text-[#F26722] mb-2 transition-all duration-200">
              ICT50220 Diploma of Information Technology
            </Link>
            <p className="text-gray-600">A comprehensive program to develop foundational IT skills needed for the industry.</p>
            <p className="text-gray-600"><strong>Duration:</strong> 52 weeks</p>
            <p className="text-gray-600"><strong>Tuition Fee:</strong> $300 per week</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default AgedPage;
