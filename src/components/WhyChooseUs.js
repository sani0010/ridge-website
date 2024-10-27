import React from 'react';

const benefits = [
  { title: 'Experienced Faculty', description: 'Our instructors are industry professionals with years of experience.', icon: '👩‍🏫' },
  { title: 'Flexible Learning', description: 'We offer a variety of learning modes to suit your schedule.', icon: '🕒' },
  { title: 'Modern Facilities', description: 'Our campuses are equipped with state-of-the-art facilities.', icon: '🏢' },
  { title: 'Industry Connections', description: 'We help you build a network with top companies in the industry.', icon: '🔗' }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#F26722]">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl" // Animation on hover
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 hover:text-[#F26722] transition-colors">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
