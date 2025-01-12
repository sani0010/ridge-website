import React from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: 'Experienced Faculty',
    description: 'Our instructors are industry professionals with years of experience, bringing real-world expertise directly to your learning journey.',
    icon: '👩‍🏫',
    bgColor: 'bg-orange-50'
  },
  {
    title: 'Flexible Learning',
    description: 'We offer a variety of learning modes to suit your schedule, including online, hybrid, and in-person options.',
    icon: '🕒',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Modern Facilities',
    description: 'Our campuses are equipped with state-of-the-art facilities, providing you with the best learning environment possible.',
    icon: '🏢',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Industry Connections',
    description: 'We help you build a network with top companies in the industry, opening doors to exciting career opportunities.',
    icon: '🔗',
    bgColor: 'bg-purple-50'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-0 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6 text-[#F26722] relative inline-block">
            Why Choose Us
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#F26722] opacity-20"></span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover the unique advantages that set us apart and make your educational journey exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.bgColor} p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group min-h-[360px] flex flex-col justify-between`}
            >
              <div>
                <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#F26722] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact#lets-connect">
            <button className="bg-[#F26722] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#e0561b] transition duration-300">
              Start your Journey With Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;