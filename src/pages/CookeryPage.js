import React from 'react';
import { Link } from 'react-router-dom';
import CertificateIV from '../assets/CertificateIV.jpg';
import Cert3Cookery from '../assets/Cert3Cookery.jpg';
import AdvDip from '../assets/Advhospitality.jpg';
import DiplomaofHospitality from '../assets/DiplomaofHospitality.jpg';

const CookeryPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#F26722] mb-4">Cookery and Hospitality Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our specialized Cookery and Hospitality courses, designed to help you develop your skills for a successful career in the industry.
        </p>
        <Link to="/courses" className="text-lg text-[#F26722] hover:underline mt-4 inline-block">
          Explore All Cookery and Hospitality Courses
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* SIT30821 Certificate III in Commercial Cookery */}
        <Link 
          to="/course/sit30821-certificate-iii-commercial-cookery" 
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src={Cert3Cookery} 
            alt="SIT30821 Certificate III in Commercial Cookery" 
            className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-[#F26722] mb-2 transition-all duration-200">
              SIT30821 Certificate III in Commercial Cookery
            </h3>
            <div className="flex justify-between text-gray-600 mt-2">
              <p><strong>Duration:</strong> 52 weeks</p>
              <p><strong>CRICOS Code:</strong> 109884J</p>
            </div>
          </div>
        </Link>

        {/* SIT40521 Certificate IV in Kitchen Management */}
        <Link 
          to="/course/sit40521-certificate-iv-kitchen-management" 
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src={CertificateIV} 
            alt="SIT40521 Certificate IV in Kitchen Management" 
            className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-[#F26722] mb-2 transition-all duration-200">
              SIT40521 Certificate IV in Kitchen Management
            </h3>
            <div className="flex justify-between text-gray-600 mt-2">
              <p><strong>Duration:</strong> 78 weeks</p>
              <p><strong>CRICOS Code:</strong> 109563D</p>
            </div>
          </div>
        </Link>

        {/* SIT50422 Diploma of Hospitality Management */}
        <Link 
          to="/course/sit50422-diploma-hospitality-management" 
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src={DiplomaofHospitality} 
            alt="SIT50422 Diploma of Hospitality Management" 
            className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-[#F26722] mb-2 transition-all duration-200">
              SIT50422 Diploma of Hospitality Management
            </h3>
            <div className="flex justify-between text-gray-600 mt-2">
              <p><strong>Duration:</strong> 104 weeks</p>
              <p><strong>CRICOS Code:</strong> 110926E</p>
            </div>
          </div>
        </Link>

        {/* SIT60322 Advanced Diploma of Hospitality Management */}
        <Link 
          to="/course/sit60322-advanced-diploma-hospitality-management" 
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        >
          <img 
            src={AdvDip} 
            alt="SIT60322 Advanced Diploma of Hospitality Management" 
            className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 hover:text-[#F26722] mb-2 transition-all duration-200">
              SIT60322 Advanced Diploma of Hospitality Management
            </h3>
            <div className="flex justify-between text-gray-600 mt-2">
              <p><strong>Duration:</strong> 104 weeks</p>
              <p><strong>CRICOS Code:</strong> 110927D</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default CookeryPage;
