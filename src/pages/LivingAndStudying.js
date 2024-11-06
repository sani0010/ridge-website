import React from 'react';

const LivingAndStudying = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-gray-800">Living and Studying in Australia</h1>
      <p className="text-lg text-gray-600">
        Living and studying in Australia will be a new and exciting experience, but there are support services from us as well as from other organizations to help make adjusting to life in Australia easier.
      </p>

      {/* Melbourne Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-[#F26722]">Living and Studying in Melbourne</h2>
        <p className="mt-4 text-gray-700">
          As the second largest city in Australia, Melbourne is a modern and cosmopolitan city with a primary focus on industry, commerce, finance, arts, sport, and culture. Melbourne is known for its scenic beauty, vibrant urban life, excellent healthcare, and high-quality education and infrastructure.
        </p>
        <p className="mt-2 text-gray-700">
          When you study in Melbourne, you’ll be living in a safe and lively city that offers world-class study options, services, and a wide variety of things to do. Melbourne has consistently been ranked as one of Australia’s most liveable cities.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Helpful Links for Living in Melbourne</h3>
          <ul className="list-disc list-inside mt-2 text-blue-600">
            <li><a href="https://www.visitvictoria.com/" target="_blank" rel="noopener noreferrer">Visit Victoria</a></li>
            <li><a href="https://www.studymelbourne.vic.gov.au/experience-melbourne-victoria" target="_blank" rel="noopener noreferrer">Study Melbourne</a></li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Ridge International College Melbourne Campus</h3>
          <p className="text-gray-700 mt-2">
            Ridge International College is located in the heart of Melbourne CBD, providing convenient access to public transport and parking. The Institute offers modern facilities, broadband-connected computers, audio-visual equipment, spacious and bright classrooms, and a resource-rich study environment.
          </p>
        </div>
      </section>

      {/* Sydney Section */}
      <section className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-[#F26722]">Living and Studying in Sydney</h2>
        <p className="mt-4 text-gray-700">
          Living in Sydney offers a vibrant lifestyle that combines urban sophistication with natural beauty. With a temperate climate, Sydney residents enjoy warm summers and mild winters, ideal for outdoor exploration and cultural activities.
        </p>
        <p className="mt-2 text-gray-700">
          While Sydney has a high cost of living, it compensates with abundant employment opportunities, a rich cultural scene, and a wide array of recreational activities, from surfing at Bondi Beach to hiking in the Blue Mountains.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Helpful Links for Living in Sydney</h3>
          <ul className="list-disc list-inside mt-2 text-blue-600">
            <li><a href="https://visitsydney.com/" target="_blank" rel="noopener noreferrer">Visit Sydney</a></li>
            <li><a href="https://www.study.nsw.gov.au/why-nsw/destinations/sydney" target="_blank" rel="noopener noreferrer">Study NSW</a></li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Ridge International College Sydney Campus</h3>
          <p className="text-gray-700 mt-2">
            Ridge International College is located in Parramatta, NSW, with convenient access to public transport and parking. The campus features modern facilities, broadband-connected PCs, audio-visual equipment, spacious classrooms, and a welcoming study environment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LivingAndStudying;
