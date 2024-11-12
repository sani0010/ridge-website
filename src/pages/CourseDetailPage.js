import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Clock,
  Award,
  MapPin,
  DollarSign,
  ChevronRight,
  Calendar,
  Briefcase,
  BookOpen,
  ClipboardCheck
} from 'lucide-react';
import { courseData } from '../data/courseData';
import ApplicationModal from './ApplicationModal';


// Import all course images
import generalEnglishImg from '../assets/general-english.jpg';
//Leader//
import AdvDiploma from '../assets/AdvDip.jpg';
import DipLeader from '../assets/DipLeader.jpg';
import Graduate from '../assets/Graduatedip.jpg';
//Cook//
import DiplomaofHospitality from '../assets/DiplomaofHospitality.jpg';
import Cert3Cookery from '../assets/Cert3Cookery.jpg';
import CertificateIV from '../assets/CertificateIV.jpg';
import AdvDip from '../assets/Advhospitality.jpg';
//IT//
import diploma from '../assets/diplomaITImage.jpg';
import advanced from '../assets/advancddiplomaITImage.jpg';
//Disable//
import DisabilitySupp from '../assets/DisabilitySupp.jpg';
//Childhood//
import childhood from '../assets/Childhoodedu.jpg';
import Cert3EarlyChildhood from '../assets/Cert3EarlyChildhood.jpg';
//Aged//
import CertificateIVAge from '../assets/CertificateIVAge.jpg';
import individualsupport from '../assets/individualsupport.jpg';
//Community//
import CommunityService from '../assets/CommunityService.jpg';

// Image mapping object - now includes all course images
const courseImages = {
  'general-english': generalEnglishImg,


  'bsb50420-diploma-leadership-management': DipLeader,
  'bsb60420-advanced-diploma-leadership-management': AdvDiploma,
  'bsb80120-graduate-diploma-management-learning': Graduate,


  'ict50220-diploma-information-technology': diploma,
  'ict60220-advanced-diploma-of-information-technology':advanced,


  'chc43121-certificate-iv-disability-support':DisabilitySupp,

  'chc30121-certificate-iii-early-childhood-education-and-care':Cert3EarlyChildhood,
  'chc50121-diploma-early-childhood-education-and-care':childhood,


  'chc33021-certificate-iii-individual-support':individualsupport,
  'chc43015-certificate-iv-ageing-support':CertificateIVAge,

  'chc52021-diploma-community-services':CommunityService,


  'sit30821-certificate-iii-commercial-cookery': Cert3Cookery,
  'sit40521-certificate-iv-kitchen-management': CertificateIV,
  'sit50422-diploma-hospitality-management': DiplomaofHospitality,
  'sit60322-advanced-diploma-hospitality-management': AdvDip,
};

// Course category mapping
const courseCategories = {
  'general-english': 'English Programs',
  'leadership-and-management': 'Management Programs',
  'business': 'Business Programs',
  'ict50220-diploma-information-technology': 'IT Programs',
  'sit30821-certificate-iii-commercial-cookery': 'Hospitality Programs',
  'sit40521-certificate-iv-kitchen-management': 'Hospitality Programs',
  'sit50422-diploma-hospitality-management': 'Hospitality Programs',
  'sit60322-advanced-diploma-hospitality-management': 'Hospitality Programs',
};



const CourseDetailPage = () => {
  const { courseName } = useParams();
  const course = courseData[courseName];
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  if (!course) {
    return <div className="text-center text-red-500">Course not found!</div>;
  }

  // Helper function to get course image
  const getCourseImage = () => {
    if (courseImages[courseName]) {
      return courseImages[courseName];
    }
    if (course.image) {
      return course.image;
    }
    return '/api/placeholder/1200/500';
  };

  const HighlightCard = ({ icon: Icon, title, value }) => (
    <div className="bg-white rounded-xl p-6 mt-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
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

  const SectionTitle = ({ children }) => (
    <h2 className="text-2xl font-bold text-gray-800 mb-6">{children}</h2>
  );

  const ContentCard = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 ${className}`}>
      {children}
    </div>
  );

  // Safely access nested arrays
  const courseStructure = course.courseStructure || {};
  const coreUnits = courseStructure.coreUnits || [];
  const electives = courseStructure.electives || [];
  const careerOutcomes = Array.isArray(course.careerOutcomes) ? course.careerOutcomes : [];
  const assessmentMethods = Array.isArray(course.assessmentMethods) ? course.assessmentMethods : [];
  const startDates = Array.isArray(course.startDates) ? course.startDates : [];

  const courseImage = getCourseImage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-[#3554a5] to-[#1e3a8a]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${courseImage})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="flex items-center text-white/80 text-sm mb-4">
            <span>Courses</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>{courseCategories[courseName] || 'All Courses'}</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{course.title}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl">{course.subtitle}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 mb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard icon={Clock} title="Duration" value={course.duration} />
          <HighlightCard icon={DollarSign} title="Tuition Fee" value={course.tuitionFee} />
          <HighlightCard icon={Award} title="CRICOS Code" value={course.cricosCode} />
          <HighlightCard icon={MapPin} title="Delivery Method" value="Face to Face" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Course Overview */}
            <ContentCard>
              <SectionTitle>Course Overview</SectionTitle>
              <p className="text-gray-600 leading-relaxed mb-8">{course.description}</p>
            </ContentCard>
            {courseName === 'general-english' && course.proficiencyLevels && course.proficiencyLevels.length > 0 && (
  <ContentCard>
    <SectionTitle>Course Levels</SectionTitle>
    <div className="grid gap-4">
      {course.proficiencyLevels.map((level, index) => (
        <div
          key={index}
          className="group flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl hover:from-blue-50 hover:to-white transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 hover:border-blue-100 hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#3554a5]/10 rounded-lg group-hover:bg-[#3554a5]/20 transition-colors">
              <BookOpen className="w-6 h-6 text-[#3554a5]" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#3554a5] transition-colors">
                {level.level}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Course Duration: {level.duration}
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#3554a5]/10 group-hover:bg-[#3554a5]/20 transition-colors">
            <span className="font-semibold text-[#3554a5]">{index + 1}</span>
          </div>
        </div>
      ))}
    </div>
  </ContentCard>
)}

            {/* Course Structure */}
            {(coreUnits.length > 0 || electives.length > 0) && (
              <ContentCard>
                <SectionTitle>Course Structure</SectionTitle>
                
                {/* Core Units */}
                {coreUnits.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Units</h3>
                    <div className="grid gap-3">
                      {coreUnits.map((unit, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                          <BookOpen className="w-5 h-5 text-[#3554a5] flex-shrink-0" />
                          <span className="text-gray-700">{unit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Elective Units */}
                {electives.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Elective Units</h3>
                    <div className="grid gap-3">
                      {electives.map((unit, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                          <BookOpen className="w-5 h-5 text-[#F26722] flex-shrink-0" />
                          <span className="text-gray-700">{unit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ContentCard>
            )}

            {/* Career Outcomes */}
            {careerOutcomes.length > 0 && (
              <ContentCard>
                <SectionTitle>Career Outcomes</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {careerOutcomes.map((career, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <Briefcase className="w-5 h-5 text-[#3554a5]" />
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </ContentCard>
            )}

            {/* Work Placement */}
            {course.workPlacement && (
              <ContentCard>
                <SectionTitle>Work Placement</SectionTitle>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">{course.workPlacement}</p>
                </div>
              </ContentCard>
            )}

            {/* Assessment Methods */}
            {assessmentMethods.length > 0 && (
              <ContentCard>
                <SectionTitle>Assessment Methods</SectionTitle>
                <div className="grid gap-4">
                  {assessmentMethods.map((method, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <ClipboardCheck className="w-5 h-5 text-[#3554a5]" />
                      <span className="text-gray-700">{method}</span>
                    </div>
                  ))}
                </div>
              </ContentCard>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Entry Requirements Card */}
              {course.admissionRequirements && (
                <ContentCard>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Entry Requirements</h3>
                  <div className="prose prose-gray">
                    <p className="text-gray-600">{course.admissionRequirements}</p>
                  </div>
                </ContentCard>
              )}

              {/* Course Fees */}
              <ContentCard>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Course Fees</h3>
                <div className="space-y-4 mb-8">
                  {course.applicationFee && (
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Application Fee</span>
                      <span className="font-semibold text-gray-900">{course.applicationFee}</span>
                    </div>
                  )}
                  {course.resourceFee && (
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Resource Fee</span>
                      <span className="font-semibold text-gray-900">{course.resourceFee}</span>
                    </div>
                  )}
                  {course.uniformFee && (
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Uniform Fee</span>
                      <span className="font-semibold text-gray-900">{course.uniformFee}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Tuition Fee</span>
                    <span className="font-semibold text-gray-900">{course.tuitionFee}</span>
                  </div>
                </div>
                <button 
  className="w-full bg-[#F26722] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#d55a1d] transition-colors mb-4"
  onClick={() => setIsApplicationModalOpen(true)}
>
  Apply Now
</button>
                <button className="w-full bg-white text-[#3554a5] border-2 border-[#3554a5] py-4 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                  Download Brochure
                </button>
              </ContentCard>

              {/* Intake Dates */}
              {startDates.length > 0 && (
                <ContentCard>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Upcoming Intakes</h3>
                  <div className="space-y-4">
                    {startDates.map((date, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <Calendar className="w-5 h-5 text-[#3554a5]" />
                        <span className="text-gray-700">{date}</span>
                      </div>
                    ))}
                  </div>
                </ContentCard>
              )}
            </div>
          </div>
        </div>
      </div>
      <ApplicationModal 
  isOpen={isApplicationModalOpen} 
  onClose={() => setIsApplicationModalOpen(false)}
/>
    </div>
  );
};

export default CourseDetailPage;