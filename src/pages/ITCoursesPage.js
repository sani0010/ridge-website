import React from 'react';
import { Link } from 'react-router-dom';
import diploma from '../assets/diplomaITImage.jpg';
import advanced from '../assets/advancddiplomaITImage.jpg';

const itCourses = [
  {
    title: 'ICT50220 Diploma of Information Technology',
    description: 'A comprehensive program to develop foundational IT skills needed for the industry.',
    duration: '52 weeks',
    tuitionFee: '$300 per week',
    image: diploma,
    slug: 'ict50220-diploma-information-technology',  // Add a slug for navigation
  },
  {
    title: 'ICT60220 Advanced Diploma of Information Technology',
    description: 'Advanced training for complex IT problem-solving and management skills.',
    duration: '78 weeks',
    tuitionFee: '$350 per week',
    image: advanced,
    slug: 'ict60220-advanced-diploma-information-technology',  // Add a slug for navigation
  }
];

const ITCoursesPage = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#F26722] mb-4">Information Technology Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our specialized Information Technology courses, designed to equip you with advanced skills.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {itCourses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <Link to={`/it-courses/${course.slug}`} className="text-xl font-semibold text-gray-800 hover:text-[#F26722] mb-2">
                {course.title}
              </Link>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-gray-600"><strong>Duration:</strong> {course.duration}</p>
              <p className="text-gray-600"><strong>Tuition Fee:</strong> {course.tuitionFee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ITCoursesPage;
