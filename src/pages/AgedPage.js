import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import CertificateIVAge from '../assets/CertificateIVAge.jpg';
import individualsupport from '../assets/individualsupport.jpg';

const AgedPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
          Aged Care and Support Courses
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Begin a fulfilling career in aged care. Our specialized courses equip you with the skills
          and knowledge to provide exceptional care and support to older individuals.
        </p>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          View All Courses
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Certificate III Card */}
        <Link
          to="/course/chc33021-certificate-iii-individual-support"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={individualsupport}
                alt="Certificate III in Individual Support"
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
              CHC33021 Certificate III in Individual Support
            </h3>

            <p className="text-gray-600 mb-6">
              Start your journey in aged care with comprehensive training in providing person-centered support.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>52 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS: 113085F</span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              to="/course/chc33021-certificate-iii-individual-support"
              className="inline-flex items-center gap-2 text-orange-600 mt-6 hover:text-orange-700 transition-all duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Link>

        {/* Certificate IV Card */}
        <Link
          to="/course/chc43015-certificate-iv-ageing-support"
          className="group bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
        >
          <div className="relative">
            <div className="h-72 overflow-hidden">
              <img
                src={CertificateIVAge}
                alt="Certificate IV in Ageing Support"
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
              CHC43015 Certificate IV in Ageing Support
            </h3>

            <p className="text-gray-600 mb-6">
              Advance your career with specialized skills in coordinating and delivering person-centered services.
            </p>

            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span>52 weeks duration</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-orange-500" />
                <span>CRICOS: 111679G</span>
              </div>
            </div>

            {/* Learn More Button */}
            <Link
              to="/course/chc43015-certificate-iv-ageing-support"
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

export default AgedPage;
