import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Clock,
  Award,
  MapPin,
  DollarSign,
  FileText,
  ChevronRight,
  Calendar,
  GraduationCap,
  CheckCircle
} from 'lucide-react';
import generalEnglish from '../assets/general-english.jpg';

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
    startDates: ['January 2025', 'April 2025', 'July 2025', 'October 2025'],
    proficiencyLevels: [
      { level: 'Elementary', duration: '10 Weeks', skills: ['Basic Communication', 'Essential Grammar', 'Vocabulary Building'] },
      { level: 'Pre-Intermediate', duration: '10 Weeks', skills: ['Daily Conversations', 'Writing Skills', 'Reading Comprehension'] },
      { level: 'Intermediate', duration: '10 Weeks', skills: ['Complex Grammar', 'Academic Writing', 'Presentation Skills'] },
      { level: 'Upper-Intermediate', duration: '10 Weeks', skills: ['Advanced Communication', 'Business English', 'IELTS Preparation'] },
      { level: 'Advanced', duration: '10 Weeks', skills: ['Fluent Communication', 'Academic Research', 'Professional Writing'] },
    ],
    assessmentMethods: [
      'Written/Oral questions',
      'Written Assignment',
      'Reading',
      'Speaking and class activities',
      'Listening activities',
    ],
    highlights: [
      'Native English-speaking teachers',
      'Small class sizes (max 18 students)',
      'Modern campus facilities',
      'Regular progress assessments',
      'Pathway to further studies'
    ]
  },
};

const CourseDetailPage = () => {
  const { courseName } = useParams();
  const course = courseData[courseName];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!course) {
    return <div className="text-center text-red-500">Course not found!</div>;
  }


  const HighlightCard = ({ icon: Icon, title, value }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-[#3554a5]/10 rounded-lg">
          <Icon className="w-6 h-6 text-[#3554a5]" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-lg font-semibold text-gray-900 mt-1">{value}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-[#3554a5] to-[#1e3a8a]">
        <div className="absolute inset-0 bg-black/30" />
        <img
          src={generalEnglish}
          alt="Course cover"
          className="absolute inset-0 w-full h-full object-cover "
          style={{ filter: 'brightness(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="flex items-center text-white/80 text-sm mb-4">
            <span>Courses</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>English Programs</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{course.title}</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-2xl text-white/90 max-w-2xl">{course.subtitle}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 mb-12 relative z-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"> {/* Added mt-8 for margin-top */}
    <HighlightCard icon={Clock} title="Duration" value={course.duration} />
    <HighlightCard icon={DollarSign} title="Tuition Fee" value={course.tuitionFee} />
    <HighlightCard icon={Award} title="CRICOS Code" value={course.cricosCode} />
    <HighlightCard icon={MapPin} title="Location" value="Melbourne Campus" />
    </div>
    </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Course Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{course.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F26722]" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Structure */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Structure</h2>
              <div className="space-y-6">
                {course.proficiencyLevels.map((level, index) => (
                  <div key={index} className="border rounded-xl p-6 hover:border-[#3554a5] transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-[#3554a5]/10 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-[#3554a5]" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{level.level}</h3>
                      </div>
                      <span className="text-[#F26722] font-medium">{level.duration}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {level.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Methods */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Assessment Methods</h2>
              <div className="grid gap-4">
                {course.assessmentMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <FileText className="w-5 h-5 text-[#3554a5]" />
                    <span className="text-gray-700">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Application Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Course Fees</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Application Fee</span>
                    <span className="font-semibold text-gray-900">{course.applicationFee}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-600">Resource Fee</span>
                    <span className="font-semibold text-gray-900">{course.resourceFee}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Weekly Tuition</span>
                    <span className="font-semibold text-gray-900">{course.tuitionFee}</span>
                  </div>
                </div>
                <button className="w-full bg-[#F26722] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#d55a1d] transition-colors mb-4">
                  Apply Now
                </button>
                <button className="w-full bg-white text-[#3554a5] border-2 border-[#3554a5] py-4 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                  Download Brochure
                </button>
              </div>

              {/* Intake Dates */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Upcoming Intakes</h3>
                <div className="space-y-4">
                  {course.startDates.map((date, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <Calendar className="w-5 h-5 text-[#3554a5]" />
                      <span className="text-gray-700">{date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;