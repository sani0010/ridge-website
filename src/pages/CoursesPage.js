import React from 'react';
import { Link } from 'react-router-dom';
import generalEnglish from '../assets/general-english.jpg';
import it from '../assets/it.jpg';
import leadership from '../assets/leadership.jpg';
import hospitality from '../assets/hospitality.jpg';
import agedCare from '../assets/aged-care.jpg';
import disabilityCare from '../assets/disability-care.jpg';
import communityService from '../assets/community-service.jpg';
import earlyChildhood from '../assets/early-childhood.jpg';

// Course data structure
const courses = [
  {
    title: 'General English',
    description: 'Learn essential English language skills for everyday communication.',
    image: generalEnglish,
    bgColor: 'bg-red-600',
    slug: 'general-english' // Added slug for linking
  },
  {
    title: 'Information Technology',
    description: 'Develop in-demand tech skills for the growing IT sector.',
    image: it,
    bgColor: 'bg-orange-500',
    slug: 'information-technology'
  },
  {
    title: 'Leadership and Management',
    description: 'Acquire essential skills for effective leadership in various industries.',
    image: leadership,
    bgColor: 'bg-green-600',
    slug: 'leadership-and-management'
  },
  {
    title: 'Commercial Cookery & Hospitality Management',
    description: 'Kickstart your career in the hospitality industry.',
    image: hospitality,
    bgColor: 'bg-blue-600',
    slug: 'commercial-cookery-hospitality-management'
  },
  {
    title: 'Aged Care',
    description: 'Learn to provide quality care and support for elderly individuals.',
    image: agedCare,
    bgColor: 'bg-amber-700',
    slug: 'aged-care'
  },
  {
    title: 'Disability Care',
    description: 'Develop skills to support people with disabilities.',
    image: disabilityCare,
    bgColor: 'bg-cyan-500',
    slug: 'disability-care'
  },
  {
    title: 'Community Service',
    description: 'Gain knowledge and skills for a career in community support services.',
    image: communityService,
    bgColor: 'bg-pink-500',
    slug: 'community-service'
  },
  {
    title: 'Early Childhood Education',
    description: "Learn to support children's development and well-being.",
    image: earlyChildhood,
    bgColor: 'bg-teal-600',
    slug: 'early-childhood-education'
  }
];

const CourseCard = ({ course }) => (
  <Link to={`/course/${course.slug}`} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className={`${course.bgColor} absolute bottom-0 left-0 right-0 h-1`}></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
      <p className="text-gray-600">{course.description}</p>
    </div>
  </Link>
);

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#F26722] mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our nationally recognized courses designed to help you succeed in your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#3554a5] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8">
            Join Ridge International College and take the first step towards your future career.
          </p>
          <button className="bg-white text-[#3554a5] px-8 py-3 rounded-lg font-semibold 
            hover:bg-gray-100 transition-colors duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
