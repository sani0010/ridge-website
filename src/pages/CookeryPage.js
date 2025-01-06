import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import CertificateIV from '../assets/CertificateIV.jpg';
import Cert3Cookery from '../assets/Cert3Cookery.jpg';
import AdvDip from '../assets/Advhospitality.jpg';
import DiplomaofHospitality from '../assets/DiplomaofHospitality.jpg';

const CookeryPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
          Cookery and Hospitality Courses
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Explore our specialized Cookery and Hospitality courses, designed to help you develop skills for a successful career in the industry.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          View All Courses
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Course Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Certificate III in Commercial Cookery */}
        <Link
          to="/course/sit30821-certificate-iii-commercial-cookery"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={Cert3Cookery}
                alt="Certificate III in Commercial Cookery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Foundation Culinary Skills
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              SIT30821 Certificate III in Commercial Cookery
            </h3>

            <p className="text-gray-600 mb-6">
              Master the fundamentals of commercial cooking and start your journey in the culinary industry.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>52 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS Code: 109884J</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>

        {/* Certificate IV in Kitchen Management */}
        <Link
          to="/course/sit40521-certificate-iv-kitchen-management"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={CertificateIV}
                alt="Certificate IV in Kitchen Management"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Kitchen Management
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              SIT40521 Certificate IV in Kitchen Management
            </h3>

            <p className="text-gray-600 mb-6">
              Develop advanced culinary skills and kitchen management expertise for leadership roles.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>78 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS Code: 109563D</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>

        {/* Diploma of Hospitality Management */}
        <Link
          to="/course/sit50422-diploma-hospitality-management"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={DiplomaofHospitality}
                alt="Diploma of Hospitality Management"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Hospitality Management
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              SIT50422 Diploma of Hospitality Management
            </h3>

            <p className="text-gray-600 mb-6">
              Gain comprehensive hospitality management skills for supervisory and management positions.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>104 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS Code: 110926E</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>

        {/* Advanced Diploma of Hospitality Management */}
        <Link
          to="/course/sit60322-advanced-diploma-hospitality-management"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={AdvDip}
                alt="Advanced Diploma of Hospitality Management"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Advanced Hospitality
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              SIT60322 Advanced Diploma of Hospitality Management
            </h3>

            <p className="text-gray-600 mb-6">
              Excel in strategic hospitality management with advanced operational and leadership skills.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>104 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS Code: 110927D</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default CookeryPage;