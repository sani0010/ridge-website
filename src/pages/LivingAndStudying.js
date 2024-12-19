import React, { useState, useEffect } from 'react';
import melbourneImage from '../assets/melbournee.jpeg';
import bridgeImage from '../assets/bridge.jpg';

const LivingAndStudying = () => {
  const [activeTab, setActiveTab] = useState('melbourne');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getImage = () => (activeTab === 'melbourne' ? melbourneImage : bridgeImage);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl font-bold text-white mb-6">
              Living and Studying in Australia
            </h1>
            <p className="text-xl text-white/90">
              Experience world-class education in Australia's most vibrant cities.
              Begin your journey with Ridge International College.
            </p>
          </div>
        </div>
      </div>

      {/* City Tabs */}
      <div className="container mx-auto px-4 -mt-8 mb-24">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex space-x-4 mb-8 border-b">
            {['melbourne', 'sydney'].map((city) => (
              <button
                key={city}
                onClick={() => setActiveTab(city)}
                className={`px-6 py-3 text-lg font-medium transition-all relative
                  ${activeTab === city 
                    ? 'text-orange-600' 
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                {city.charAt(0).toUpperCase() + city.slice(1)}
                {activeTab === city && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600" />
                )}
              </button>
            ))}
          </div>

          {/* City Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - City Info */}
            <div className="space-y-6">
              {activeTab === 'melbourne' ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Melbourne: A City of Culture
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-9">
                    Melbourne is a modern, cosmopolitan city renowned for its vibrant culture, arts, and food scene. It's consistently ranked among the most liveable cities in the world due to its quality of life and excellent infrastructure.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                      Rich cultural diversity and food scene
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                      Excellent public transport and infrastructure
                    </li>
                  </ul>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Sydney: Where Opportunity Meets Lifestyle
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-9">
                    Sydney offers a blend of urban sophistication and natural beauty, making it an iconic destination with beaches, cultural attractions, and a thriving job market.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                      Beautiful beaches and outdoor lifestyle
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                      Diverse international community
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* Right Column - Campus Info with Image */}
            <div className="space-y-6">
              <img 
                src={getImage()} 
                alt={activeTab === 'melbourne' ? 'Melbourne' : 'Sydney'} 
                className="w-full h-72 object-cover rounded-lg mb-6"
              />
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Campus
                </h3>
                <div className="prose text-gray-600">
                  {activeTab === 'melbourne' ? (
                    <>
                      <p>Located in the heart of Melbourne, our campus features:</p>
                      <ul className="space-y-2">
                        <li>Modern facilities and equipment</li>
                        <li>High-speed internet and computer labs</li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <p>Located in Parramatta, Sydney, our campus offers:</p>
                      <ul className="space-y-2">
                        <li>Modern computer laboratories</li>
                        <li>Student recreation areas</li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingAndStudying;
