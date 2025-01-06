import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import AdvDiploma from '../assets/AdvDip.jpg';
import DipLeader from '../assets/DipLeader.jpg';
import Graduate from '../assets/Graduatedip.jpg';

const LeadershipPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
          Leadership and Management
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Explore our specialized Leadership and Management courses, designed to equip you with advanced skills in managing teams and driving organizational success.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          Explore All Courses
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* BSB50420 Diploma of Leadership & Management */}
        <Link
          to="/course/bsb50420-diploma-leadership-management"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={DipLeader}
                alt="BSB50420 Diploma of Leadership & Management"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Leadership Skills
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              BSB50420 Diploma of Leadership & Management
            </h3>

            <p className="text-gray-600 mb-6">
              Gain the leadership skills required for managerial positions in a variety of industries.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>52 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS Code: 104385B</span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              to="/course/bsb50420-diploma-leadership-management"
              className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Link>

        {/* BSB60420 Advanced Diploma of Leadership & Management */}
        <Link
          to="/course/bsb60420-advanced-diploma-leadership-management"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={AdvDiploma}
                alt="BSB60420 Advanced Diploma of Leadership & Management"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Advanced Leadership
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              BSB60420 Advanced Diploma of Leadership & Management
            </h3>

            <p className="text-gray-600 mb-6">
              Elevate your career with advanced skills in leadership, management, and strategic planning.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>64 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS Code: 105414E</span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              to="/course/bsb60420-advanced-diploma-leadership-management"
              className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Link>

        {/* BSB80120 Graduate Diploma of Management (Learning) */}
        <Link
          to="/course/bsb80120-graduate-diploma-management-learning"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={Graduate}
                alt="BSB80120 Graduate Diploma of Management (Learning)"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Educational Leadership
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              BSB80120 Graduate Diploma of Management (Learning)
            </h3>

            <p className="text-gray-600 mb-6">
              Specialize in learning management and educational leadership to further your career.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>52 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS Code: 108372H</span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              to="/course/bsb80120-graduate-diploma-management-learning"
              className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default LeadershipPage;
