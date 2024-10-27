import React from 'react';

const courses = [
  { title: 'Diploma of Business', description: 'Learn business fundamentals.', duration: '1 year', fee: '$5,000' },
  { title: 'Diploma of IT', description: 'In-demand tech skills.', duration: '1.5 years', fee: '$6,500' },
  { title: 'Certificate III in Hospitality', description: 'Kickstart your hospitality career.', duration: '6 months', fee: '$3,000' }
];

const CoursesPage = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
              <p className="mb-2">{course.description}</p>
              <p className="text-gray-600">Duration: {course.duration}</p>
              <p className="text-gray-600">Fee: {course.fee}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
