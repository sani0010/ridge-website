// src/components/NewsAndEvents.js
import React from 'react';
import orientationImage from '../assets/orientation.jpg'; // Replace with your local images
import intakeImage from '../assets/intake.jpg';
import cupDayImage from '../assets/melbourne-cup.jpg';

const NewsAndEvents = () => {
  const news = [
    {
      image: orientationImage,
      date: "October 2024",
      title: "Orientation Day (October)",
      description: "Ridge International College recently hosted its highly anticipated Orientation Program, extending a warm welcome to the incoming class and laying the foundation for an enriching academic journey."
    },
    {
      image: intakeImage,
      date: "03 June 2023",
      title: "Intake (October)",
      description: "Ridge International College warmly hosted its highly anticipated Orientation Program, extending a warm welcome to the incoming class and laying the foundation for an enriching academic journey."
    },
    {
      image: cupDayImage,
      date: "01 June 2023",
      title: "Melbourne Cup Day (November)",
      description: "The Badminton World Federation is developing its services within the country's governing body, Philippine Badminton Association."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mb-16">
      <h1 className="text-2xl font-bold mb-8">News and Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
