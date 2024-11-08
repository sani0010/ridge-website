import React from 'react';
import { useState, useEffect } from 'react';

const LivingAndStudying = () => {
  const [activeTab, setActiveTab] = useState('melbourne');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      <div className="container mx-auto px-4 -mt-8 mb-24">  {/* Added mb-24 for bottom space */}
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
              <div className={`transition-all duration-500 ${activeTab === 'melbourne' ? 'opacity-100' : 'opacity-0 absolute'}`}>
                {activeTab === 'melbourne' && (
                  <>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      Melbourne: A City of Culture
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      As Australia's second-largest city, Melbourne offers a perfect blend of 
                      culture, education, and lifestyle. Known for its vibrant arts scene,
                      world-class education, and exceptional quality of life.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        Ranked as one of Australia's most liveable cities
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        Excellent public transport and infrastructure
                      </li>
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        Rich cultural diversity and vibrant food scene
                      </li>
                    </ul>
                  </>
                )}
              </div>

              <div className={`transition-all duration-500 ${activeTab === 'sydney' ? 'opacity-100' : 'opacity-0 absolute'}`}>
                {activeTab === 'sydney' && (
                  <>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      Sydney: Where Opportunity Meets Lifestyle
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Sydney combines urban sophistication with natural beauty, offering
                      students an unparalleled living experience. From iconic beaches to
                      bustling business districts, Sydney has it all.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        Global business hub with career opportunities
                      </li>
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
            </div>

            {/* Right Column - Campus Info */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Campus
              </h3>
              <div className="prose text-gray-600">
                {activeTab === 'melbourne' ? (
                  <div className="space-y-4">
                    <p>
                      Located in the heart of Melbourne CBD, our campus provides:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        Modern facilities and equipment
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        Spacious, bright classrooms
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        High-speed internet and computer labs
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p>
                      Our Parramatta campus features:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        State-of-the-art learning facilities
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        Modern computer laboratories
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                        Student recreation areas
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivingAndStudying;