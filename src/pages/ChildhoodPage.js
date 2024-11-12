import React from 'react';
import { Link } from 'react-router-dom';
import childhood from '../assets/Childhoodedu.jpg';
import Cert3EarlyChildhood from '../assets/Cert3EarlyChildhood.jpg';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

const ChildhoodPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
          Early Childhood Education & Care Courses
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Explore our specialized Early Childhood Education & Care courses, designed to help you build a successful career in childcare.
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
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* CHC30121 Certificate III in Early Childhood Education and Care Card */}
        <Link
          to="/course/chc30121-certificate-iii-early-childhood-education-and-care"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={Cert3EarlyChildhood}
                alt="CHC30121 Certificate III in Early Childhood Education and Care"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Entry Level Course
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              CHC30121 Certificate III in Early Childhood Education and Care
            </h3>

            <p className="text-gray-600 mb-6">
              An entry-level qualification to begin a rewarding career in childcare, focusing on key caregiving and educational skills.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>52 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS: 111678H</span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link 
              to="/course/chc30121-certificate-iii-early-childhood-education-and-care" 
              className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Link>

        {/* CHC50121 Diploma of Early Childhood Education and Care Card */}
        <Link
          to="/course/chc50121-diploma-early-childhood-education-and-care"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={childhood}
                alt="CHC50121 Diploma of Early Childhood Education and Care"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-8 relative">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Advanced Qualification
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
              CHC50121 Diploma of Early Childhood Education and Care
            </h3>

            <p className="text-gray-600 mb-6">
              Further your skills to manage, design, and oversee educational programs for young children.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>78 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS: 111718E</span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link 
              to="/course/chc50121-diploma-early-childhood-education-and-care" 
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

export default ChildhoodPage;
