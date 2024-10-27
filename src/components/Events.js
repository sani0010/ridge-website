import React from 'react';
import generalEnglish from '../assets/general-english.jpg';
import it from '../assets/it.jpg';
import leadership from '../assets/leadership.jpg';
import hospitality from '../assets/hospitality.jpg';
import communityService from '../assets/community-service.jpg';
import earlyChildhood from '../assets/early-childhood.jpg';

const courses = [
  { title: 'General English', description: 'Learn essential English language skills for everyday communication.', image: generalEnglish },
  { title: 'Information Technology', description: 'Develop in-demand tech skills for the growing IT sector.', image: it },
  { title: 'Leadership and Management', description: 'Acquire essential skills for effective leadership in various industries.', image: leadership },
  { title: 'Commercial Cookery & Hospitality Management', description: 'Kickstart your career in the hospitality industry.', image: hospitality },
  { title: 'Community Service', description: 'Gain knowledge and skills for a career in community support services.', image: communityService },
  { title: 'Early Childhood Education and Care', description: 'Learn to support children’s development and well-being.', image: earlyChildhood },
];

const CourseHighlights = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6 text-orange-700">Explore the Areas of Study</h2>
        <p className="mb-12 text-lg text-gray-600 max-w-2xl mx-auto">
          Ridge International College is one of the best VET colleges in Australia offering nationally recognised courses for both domestic and international students in Melbourne and Sydney.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:shadow-xl">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
                style={{ borderRadius: '10px' }}
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-500 text-base">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
