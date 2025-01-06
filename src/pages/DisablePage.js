import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import DisabilitySupp from '../assets/DisabilitySupp.jpg';

const DisablePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-6">
          Disability Support Courses
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Transform lives and build a rewarding career in disability support. Our specialized courses 
          provide you with practical skills and deep understanding to make a real difference.
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
      <div className="flex justify-center">
        <div className="max-w-4xl w-full">
          <Link
            to="/course/chc43121-certificate-iv-disability-support"
            className="block bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:transform hover:scale-[1.02]"
          >
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 h-96">
                <img
                  src={DisabilitySupp}
                  alt="Certificate IV in Disability Support"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-8 relative">
              {/* Course Badge */}
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Popular Course
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-orange-500 transition-colors">
                CHC43121 Certificate IV in Disability Support
              </h3>

              <p className="text-gray-600 mb-6 text-lg">
                Gain comprehensive skills and knowledge to provide person-centered support 
                to people with disabilities in various settings.
              </p>

              <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span>26 weeks duration</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span>CRICOS: 113086E</span>
                </div>
              </div>

              {/* Updated Learn More Button */}
              <div className="absolute bottom-8 right-8">
                <div className="flex items-center text-orange-500 font-medium">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default DisablePage;
