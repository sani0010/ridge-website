
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
import { courseData } from '../data/courseData';

// Import all course images
import generalEnglishImg from '../assets/general-english.jpg';
import leadershipImg from '../assets/leadership.jpg';

// Image mapping object
const courseImages = {
  'general-english': generalEnglishImg,
  'leadership-and-management': leadershipImg,
};

// Course category mapping
const courseCategories = {
  'general-english': 'English Programs',
  'leadership-and-management': 'Management Programs',
  'business': 'Business Programs',
  'information-technology': 'IT Programs',
};

const CourseDetailPage = () => {
  const { courseName } = useParams();
  const course = courseData[courseName];



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
          src={courseImages[courseName]}
          alt={`${course.title} cover`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="flex items-center text-white/80 text-sm mb-4">
            <span>Courses</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>{courseCategories[courseName]}</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{course.title}</span>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">{course.title}</h1>
          <p className="text-2xl text-white/90 max-w-2xl">{course.subtitle}</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 mb-12 relative z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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